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
import { MAX_PASS_LEN } from './defaults';

import { Prefix } from '@polkadot/util-crypto/address/types';

import { KeyringPair$Meta, KeyringPair$Json } from '@polkadot/keyring/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { AddressSubject, SingleAddress } from './observable/types';
import { CreateResult, KeyringAddress, KeyringAddressType,
  KeyringItemType, KeyringJson, KeyringJson$Meta,
  KeyringOptions, KeyringStruct, KeyringStore } from './types';

import createPair from '@polkadot/keyring/pair';
import { hexToU8a, isHex, isString } from '@polkadot/util';

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
  protected mGenesisHash?: string;
  protected mStore!: KeyringStore;
  private mKeyring?: KeyringInstance;
  private mPrefix?: Prefix;

  private mAccounts: AddressSubject = accounts;

  private mAddresses: AddressSubject = addresses;

  private mContracts: AddressSubject = contracts;


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
      env.isDevelopment() || pair.meta.isTesting !== true,
    );
  }

  public isAvailable(address: Uint8Array | string): boolean {
    const accountsValue = this.accounts.subject.getValue();
    const addressesValue = this.addresses.subject.getValue();
    const contractsValue = this.contracts.subject.getValue();
    const encodedAddress = isString(address)
      ? address
      : this.encodeAddress(address);

    return !accountsValue[encodedAddress] && !addressesValue[encodedAddress] && !contractsValue[encodedAddress];
  }

  public isPassValid(password: string): boolean {
    return password.length > 0 && password.length <= MAX_PASS_LEN;
  }

  public get accounts(): AddressSubject {
    return this.mAccounts;
  }

  public get addresses(): AddressSubject {
    return this.mAddresses;
  }

  public get contracts(): AddressSubject {
    return this.mContracts;
  }

  public get keyring(): KeyringInstance {
    if (this.mKeyring) {
      return this.mKeyring;
    }

    throw new Error('Keyring should be initialised via \'loadAll\' before use');
  }

  public addPair(pair: KeyringPair, password: string): CreateResult {
    this.keyring.addPair(pair);

    return {
      json: this.saveAccount(pair, password),
      pair,
    };
  }

  public addExternal(address: string | Uint8Array, meta: KeyringPair$Meta = {}): CreateResult {
    const pair = this.keyring.addFromAddress(address, { ...meta, isExternal: true }, null);

    return {
      json: this.saveAccount(pair),
      pair,
    };
  }

  public addUri(suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType): CreateResult {
    const pair = this.keyring.addFromUri(suri, meta, type);

    return {
      json: this.saveAccount(pair, password),
      pair,
    };
  }

  public backupAccount(pair: KeyringPair, password: string): KeyringPair$Json {
    if (!pair.isLocked) {
      pair.lock();
    }

    pair.decodePkcs8(password);

    return pair.toJson(password);
  }

  public createFromUri(suri: string, meta: KeyringPair$Meta = {}, type?: KeypairType): KeyringPair {
    return this.keyring.createFromUri(suri, meta, type);
  }

  public encryptAccount(pair: KeyringPair, password: string): void {
    const json = pair.toJson(password);

    json.meta.whenEdited = Date.now();

    this.keyring.addFromJson(json);
    this.accounts.add(this.mStore, pair.address, json);
  }

  public forgetAccount(address: string): void {
    this.keyring.removePair(address);
    this.accounts.remove(this.mStore, address);
  }

  public forgetAddress(address: string): void {
    this.addresses.remove(this.mStore, address);
  }

  public forgetContract(address: string): void {
    this.contracts.remove(this.mStore, address);
  }

  public getAccount(address: string | Uint8Array): KeyringAddress | undefined {
    return this.getAddress(address, 'account');
  }

  public get genesisHash(): string | undefined {
    return this.mGenesisHash;
  }

  public getAccounts(): KeyringAddress[] {
    const available = this.accounts.subject.getValue();

    return Object
      .keys(available)
      .map((address): KeyringAddress => this.getAddress(address, 'account') as KeyringAddress)
      .filter((account): boolean => env.isDevelopment() || account.meta.isTesting !== true);
  }

  public setAddressPrefix(prefix: number): void {
    this.mPrefix = prefix as Prefix;
  }

  public setDevMode(isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  public saveAccount(pair: KeyringPair, password?: string): KeyringPair$Json {
    this.addTimestamp(pair);

    const json = pair.toJson(password);

    this.keyring.addFromJson(json);
    this.accounts.add(this.mStore, pair.address, json);

    return json;
  }

  /* tslint:disable */
  public loadAll(options: KeyringOptions, injected:
     { address: string; meta: KeyringJson$Meta }[] = []): void {
    this.initKeyring(options);

    this.mStore.all((key: string, json: KeyringJson): void => {
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

  public getContract(address: string | Uint8Array): KeyringAddress | undefined {
    return this.getAddress(address, 'contract');
  }

  public getContracts(): KeyringAddress[] {
    const available = this.contracts.subject.getValue();

    return Object
      .entries(available)
      .filter(([, { json: { meta: { contract } } }]): boolean =>
        !!contract && contract.genesisHash === this.genesisHash,
      )
      .map(([address]): KeyringAddress => this.getContract(address) as KeyringAddress);
  }

  public restoreAccount(json: KeyringPair$Json, password: string): KeyringPair {
    const type = Array.isArray(json.encoding.content) ? json.encoding.content[1] : 'ed25519';
    const pair = createPair(
      type,
      {
        // FIXME Just for the transition period (ignoreChecksum)
        publicKey: this.decodeAddress(json.address, true)
      },
      json.meta,
      hexToU8a(json.encoded)
    );

    // unlock, save account and then lock (locking cleans secretKey, so needs to be last)
    pair.decodePkcs8(password);
    this.addPair(pair, password);
    pair.lock();

    return pair;
  }

  public saveAccountMeta(pair: KeyringPair, meta: KeyringPair$Meta): void {
    const address = pair.address;

    this.mStore.get(accountKey(address), (json: KeyringJson): void => {
      pair.setMeta(meta);
      json.meta = pair.meta;

      this.accounts.add(this.mStore, address, json);
    });
  }

  public saveAddress(address: string, meta: KeyringPair$Meta, type: KeyringAddressType = 'address'): KeyringPair$Json {
    const available = this.addresses.subject.getValue();

    const json = (available[address] && available[address].json) || {
      address,
      meta: {
        isRecent: undefined,
        whenCreated: Date.now()
      }
    };

    Object.keys(meta).forEach((key): void => {
      json.meta[key] = meta[key];
    });

    delete json.meta.isRecent;

    this.stores[type]().add(this.mStore, address, json);

    return json as KeyringPair$Json;
  }

  public saveContract(address: string, meta: KeyringPair$Meta): KeyringPair$Json {
    return this.saveAddress(address, meta, 'contract');
  }

  public saveRecent(address: string): SingleAddress {
    const available = this.addresses.subject.getValue();

    if (!available[address]) {
      this.addresses.add(this.mStore, address, {
        address,
        meta: {
          isRecent: true,
          whenCreated: Date.now()
        }
      });
    }

    return this.addresses.subject.getValue()[address];
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

  public getAddresses(): KeyringAddress[] {
    const available = this.addresses.subject.getValue();

    return Object
      .keys(available)
      .map((address): KeyringAddress => this.getAddress(address) as KeyringAddress);
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

      this.accounts.add(this.mStore, pair.address, json);
    }

    const [, hexAddr] = key.split(':');

    this.rewriteKey(json, key, hexAddr.trim(), accountKey);
  }

  private loadAddress(json: KeyringJson, key: string): void {
    const { isRecent, whenCreated = 0 } = json.meta;

    if (isRecent && (Date.now() - whenCreated) > RECENT_EXPIRY) {
      this.mStore.remove(key);
      return;
    }

    const address = this.encodeAddress(
      isHex(json.address)
        ? hexToU8a(json.address)
        // FIXME Just for the transition period (ignoreChecksum)
        : this.decodeAddress(json.address, true)
    );
    const [, hexAddr] = key.split(':');

    this.addresses.add(this.mStore, address, json);
    this.rewriteKey(json, key, hexAddr, addressKey);
  }

  private loadContract(json: KeyringJson, key: string): void {
    const address = this.encodeAddress(
      this.decodeAddress(json.address),
    );
    const [, hexAddr] = key.split(':');

    // move genesisHash to top-level (TODO Remove from contracts section?)
    json.meta.genesisHash = json.meta.genesisHash || (json.meta.contract && json.meta.contract.genesisHash);

    this.contracts.add(this.mStore, address, json);
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

    this.accounts.add(this.mStore, pair.address, json);
  }

  private rewriteKey(json: KeyringJson, key: string, hexAddr: string, creator: (addr: string) => string): void {
    if (hexAddr.substr(0, 2) === '0x') {
      return;
    }

    this.mStore.remove(key);
    this.mStore.set(creator(hexAddr), json);
  }

  protected initKeyring(options: KeyringOptions): void {
    const keyring = testKeyring({ addressPrefix: this.mPrefix, ...options }, true);

    // if (isBoolean(options.isDevelopment)) {
    //   this.setDevMode(options.isDevelopment);
    // }

    this.mKeyring = keyring;
    this.mGenesisHash = options.genesisHash && options.genesisHash.toHex();
    this.mStore = options.store || new BrowserStore();

    this.addAccountPairs();
  }

  protected addAccountPairs(): void {
    this.keyring
      .getPairs()
      .forEach(({ address, meta }: KeyringPair): void => {
        this.accounts.add(this.mStore, address, { address, meta });
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
