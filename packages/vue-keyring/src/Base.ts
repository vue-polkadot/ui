// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import { Prefix } from '@polkadot/util-crypto/address/types';
import { AddressSubject } from './observable/types';
import { KeyringOptions, KeyringStore } from './types';

import testKeyring from '@polkadot/keyring/testing';
import { isBoolean, isString } from '@polkadot/util';

import accounts from './observable/accounts';
import addresses from './observable/addresses';
import contracts from './observable/contracts';
import env from './observable/development';
import BrowserStore from './stores/Browser'; // direct import (skip index with all)
import { MAX_PASS_LEN } from './defaults';
// import Vue from 'vue';
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Base extends Vue {

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

  public get genesisHash(): string | undefined {
    return this.mGenesisHash;
  }

  protected mGenesisHash?: string;

  protected mStore!: KeyringStore;
  private mAccounts: AddressSubject;

  private mAddresses: AddressSubject;

  private mContracts: AddressSubject;

  private mKeyring?: KeyringInstance;

  private mPrefix?: Prefix;

  public constructor() {
    super();
    this.mAccounts = accounts;
    this.mAddresses = addresses;
    this.mContracts = contracts;
    this.mKeyring = undefined;
  }

  public decodeAddress = (key: string | Uint8Array, ignoreChecksum?: boolean): Uint8Array => {
    return this.keyring.decodeAddress(key, ignoreChecksum);
  }

  public encodeAddress = (key: string | Uint8Array): string => {
    return this.keyring.encodeAddress(key);
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

  public setAddressPrefix(prefix: number): void {
    this.mPrefix = prefix as Prefix;
  }

  public setDevMode(isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  protected initKeyring(options: KeyringOptions): void {
    const keyring = testKeyring({ addressPrefix: this.mPrefix, ...options }, true);

    if (isBoolean(options.isDevelopment)) {
      this.setDevMode(options.isDevelopment);
    }

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
