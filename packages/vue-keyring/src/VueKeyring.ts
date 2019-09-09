// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import BrowserStore from './stores/Browser'; // direct import (skip index with all)
import testKeyring from '@polkadot/keyring/testing';
import accounts from './observable/accounts';
import addresses from './observable/addresses';
import contracts from './observable/contracts';

import { Prefix } from '@polkadot/util-crypto/address/types';


import { KeyringPair$Meta, KeyringPair$Json } from '@polkadot/keyring/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { AddressSubject, SingleAddress } from './observable/types';
import { CreateResult, KeyringAddress, KeyringAddressType,
  KeyringItemType, KeyringJson, KeyringJson$Meta,
  KeyringOptions, KeyringStruct, KeyringStore } from './types';

import createPair from '@polkadot/keyring/pair';
import { hexToU8a, isHex, isString } from '@polkadot/util';

import env from './observable/development';
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
  public accounts: any;
  private _accounts: AddressSubject = accounts;
  public addresses: any;
  private _addresses: AddressSubject = addresses;
  public contracts: any;
  private _contracts: AddressSubject = contracts;

  private _keyring?: KeyringInstance;
  private _prefix?: Prefix;
  protected _genesisHash?: string;
  protected _store!: KeyringStore;

  public encodeAddress = (key: string | Uint8Array): string => {
    return this.keyring.encodeAddress(key);
  }

  public get keyring(): KeyringInstance {
    if (this._keyring) {
      return this._keyring;
    }

    throw new Error('Keyring should be initialised via \'loadAll\' before use');
  }

  protected initKeyring(options: KeyringOptions): void {
    const keyring = testKeyring({ addressPrefix: this._prefix, ...options }, true);

    // if (isBoolean(options.isDevelopment)) {
    //   this.setDevMode(options.isDevelopment);
    // }

    this._keyring = keyring;
    this._genesisHash = options.genesisHash && options.genesisHash.toHex();
    // this._store = options.store || new BrowserStore();

    this.addAccountPairs();
  }

  protected addAccountPairs(): void {
    this.keyring
      .getPairs()
      .forEach(({ address, meta }: KeyringPair): void => {
        this.accounts.add(this._store, address, { address, meta });
      });
  }
}

const keyringInstance = new Keyring();

export default keyringInstance;
