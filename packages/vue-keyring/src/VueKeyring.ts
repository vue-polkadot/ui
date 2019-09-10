// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import BrowserStore from './stores/Browser'; // direct import (skip index with all)
import testKeyring from '@polkadot/keyring/testing';
import accounts from './observable/accounts';
import addresses from './observable/addresses';
import contracts from './observable/contracts';
import env from './observable/development';

import { Prefix } from '@polkadot/util-crypto/address/types';


import { KeyringPair$Meta, KeyringPair$Json } from '@polkadot/keyring/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { AddressSubject, SingleAddress } from './observable/types';
import { CreateResult, KeyringAddress, KeyringAddressType,
  KeyringItemType, KeyringJson, KeyringJson$Meta,
  KeyringOptions, KeyringStruct, KeyringStore } from './types';

import createPair from '@polkadot/keyring/pair';
import { hexToU8a, isHex, isString } from '@polkadot/util';

import Base from './Base';
import { accountKey, addressKey, accountRegex, addressRegex, contractKey, contractRegex } from './defaults';
import keyringOption from './options';
// import Vue from 'vue';
const RECENT_EXPIRY = 24 * 60 * 60;

// No accounts (or test accounts) should be loaded until after the chain determination.
// Chain determination occurs outside of Keyring.
// Loading `keyring.loadAll({ type: 'ed25519' | 'sr25519' })` is triggered
// from the API after the chain is received
import { Vue,  Component } from 'vue-property-decorator';

// @Component({})
export class Keyring implements KeyringStruct {

  private _accounts: AddressSubject = accounts;

  private _addresses: AddressSubject = addresses;

  private _contracts: AddressSubject = contracts;

  private _keyring?: KeyringInstance;
  private _prefix?: Prefix;
  protected _genesisHash?: string;
  protected _store!: KeyringStore;

  public encodeAddress = (key: string | Uint8Array): string => {
    return this.keyring.encodeAddress(key);
  }

  public decodeAddress = (key: string | Uint8Array, ignoreChecksum?: boolean): Uint8Array => {
    return this.keyring.decodeAddress(key, ignoreChecksum);
  }

  public getPair(address: string | Uint8Array): KeyringPair {
    return this.keyring.getPair(address);
  }

  public getPairs(): KeyringPair[] {
    return this.keyring.getPairs().filter((pair: KeyringPair): boolean =>
      env.isDevelopment() || pair.meta.isTesting !== true
    );
  }

  public get accounts(): AddressSubject {
    return this._accounts;
  }

  public get addresses(): AddressSubject {
    return this._addresses;
  }

  public get contracts(): AddressSubject {
    return this._contracts;
  }

  public get keyring(): KeyringInstance {
    if (this._keyring) {
      return this._keyring;
    }

    throw new Error('Keyring should be initialised via \'loadAll\' before use');
  }

  public addPair(pair: KeyringPair, password: string): CreateResult {
    this.keyring.addPair(pair);

    return {
      json: this.saveAccount(pair, password),
      pair
    };
  }

  public addUri(suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType): CreateResult {
    const pair = this.keyring.addFromUri(suri, meta, type);

    return {
      json: this.saveAccount(pair, password),
      pair
    };
  }

  public get genesisHash(): string | undefined {
    return this._genesisHash;
  }

  public setAddressPrefix(prefix: number): void {
    this._prefix = prefix as Prefix;
  }

  public setDevMode(isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  public saveAccount(pair: KeyringPair, password?: string): KeyringPair$Json {
    this.addTimestamp(pair);

    const json = pair.toJson(password);

    this.keyring.addFromJson(json);
    this.accounts.add(this._store, pair.address, json);

    return json;
  }

  public loadAll(options: KeyringOptions, injected:
     { address: string; meta: KeyringJson$Meta }[] = []): void {
    this.initKeyring(options);

    this._store.all((key: string, json: KeyringJson): void => {
      if (options.filter ? options.filter(json) : true) {
        if (this.allowGenesis(json)) {
          if (accountRegex.test(key)) {
            this.loadAccount(json, key);
          } else if (addressRegex.test(key)) {
            this.loadAddress(json, key);
          } else if (contractRegex.test(key)) {
            this.loadContract(json, key);
          }
        }
      }
    });

    injected.forEach((account): void => {
      if (this.allowGenesis(account)) {
        this.loadInjected(account.address, account.meta);
      }
    });

    keyringOption.init(this);
  }

  public getAddress(_address: string | Uint8Array, type: KeyringItemType | null = null): KeyringAddress | undefined {
    const address = isString(_address)
      ? _address
      : this.encodeAddress(_address);
    const publicKey = this.decodeAddress(address);
    const stores = type
      ? [this.stores[type]]
      : Object.values(this.stores);

    const info = stores.reduce<SingleAddress | undefined>((lastInfo, store): SingleAddress | undefined =>
      (store().subject.getValue()[address] || lastInfo), undefined);

    return info && {
      address,
      publicKey,
      meta: info.json.meta,
    };
  }

  private stores = {
    address: (): AddressSubject => this.addresses,
    contract: (): AddressSubject => this.contracts,
    account: (): AddressSubject => this.accounts
  };

  private allowGenesis(json?: KeyringJson | { meta: KeyringJson$Meta } | null): boolean {
    if (json && json.meta && this.genesisHash) {
      if (json.meta.genesisHash) {
        return this.genesisHash === json.meta.genesisHash;
      } else if (json.meta.contract) {
        return this.genesisHash === json.meta.contract.genesisHash;
      }
    }

    return true;
  }

  private loadAccount(json: KeyringJson, key: string): void {
    if (!json.meta.isTesting && (json as KeyringPair$Json).encoded) {
      // FIXME Just for the transition period (ignoreChecksum)
      const pair = this.keyring.addFromJson(json as KeyringPair$Json, true);

      this.accounts.add(this._store, pair.address, json);
    }

    const [, hexAddr] = key.split(':');

    this.rewriteKey(json, key, hexAddr.trim(), accountKey);
  }

  private loadAddress(json: KeyringJson, key: string): void {
    const { isRecent, whenCreated = 0 } = json.meta;

    if (isRecent && (Date.now() - whenCreated) > RECENT_EXPIRY) {
      this._store.remove(key);
      return;
    }

    const address = this.encodeAddress(
      isHex(json.address)
        ? hexToU8a(json.address)
        // FIXME Just for the transition period (ignoreChecksum)
        : this.decodeAddress(json.address, true)
    );
    const [, hexAddr] = key.split(':');

    this.addresses.add(this._store, address, json);
    this.rewriteKey(json, key, hexAddr, addressKey);
  }

  private loadContract(json: KeyringJson, key: string): void {
    const address = this.encodeAddress(
      this.decodeAddress(json.address),
    );
    const [, hexAddr] = key.split(':');

    // move genesisHash to top-level (TODO Remove from contracts section?)
    json.meta.genesisHash = json.meta.genesisHash || (json.meta.contract && json.meta.contract.genesisHash);

    this.contracts.add(this._store, address, json);
    this.rewriteKey(json, key, hexAddr, contractKey);
  }

  private loadInjected(address: string, meta: KeyringJson$Meta): void {
    const json = {
      address,
      meta: {
        ...meta,
        isInjected: true,
      },
    };
    const pair = this.keyring.addFromAddress(address, json.meta);

    this.accounts.add(this._store, pair.address, json);
  }

  private rewriteKey(json: KeyringJson, key: string, hexAddr: string, creator: (addr: string) => string): void {
    if (hexAddr.substr(0, 2) === '0x') {
      return;
    }

    this._store.remove(key);
    this._store.set(creator(hexAddr), json);
  }

  protected initKeyring(options: KeyringOptions): void {
    const keyring = testKeyring({ addressPrefix: this._prefix, ...options }, true);

    // if (isBoolean(options.isDevelopment)) {
    //   this.setDevMode(options.isDevelopment);
    // }

    this._keyring = keyring;
    this._genesisHash = options.genesisHash && options.genesisHash.toHex();
    this._store = options.store || new BrowserStore();

    this.addAccountPairs();
  }

  protected addAccountPairs(): void {
    this.keyring
      .getPairs()
      .forEach(({ address, meta }: KeyringPair): void => {
        this.accounts.add(this._store, address, { address, meta });
      });
  }

  protected addTimestamp(pair: KeyringPair): void {
    if (!pair.meta.whenCreated) {
      pair.setMeta({ whenCreated: Date.now() });
    }
  }
}

const keyringInstance = new Keyring();

export default keyringInstance;
