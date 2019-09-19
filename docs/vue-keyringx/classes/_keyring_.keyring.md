[vue-polkadot UI libraries](../README.md) › [Globals](../globals.md) › ["Keyring"](../modules/_keyring_.md) › [Keyring](_keyring_.keyring.md)

# Class: Keyring

## Hierarchy

* **Keyring**

## Implements

* [KeyringStruct](../interfaces/_types_.keyringstruct.md)

## Index

### Accessors

* [accounts](_keyring_.keyring.md#accounts)
* [addresses](_keyring_.keyring.md#addresses)
* [contracts](_keyring_.keyring.md#contracts)
* [genesisHash](_keyring_.keyring.md#genesishash)
* [keyring](_keyring_.keyring.md#keyring)

### Methods

* [addExternal](_keyring_.keyring.md#addexternal)
* [addPair](_keyring_.keyring.md#addpair)
* [addUri](_keyring_.keyring.md#adduri)
* [backupAccount](_keyring_.keyring.md#backupaccount)
* [createFromUri](_keyring_.keyring.md#createfromuri)
* [decodeAddress](_keyring_.keyring.md#decodeaddress)
* [encodeAddress](_keyring_.keyring.md#encodeaddress)
* [encryptAccount](_keyring_.keyring.md#encryptaccount)
* [forgetAccount](_keyring_.keyring.md#forgetaccount)
* [forgetAddress](_keyring_.keyring.md#forgetaddress)
* [forgetContract](_keyring_.keyring.md#forgetcontract)
* [getAccount](_keyring_.keyring.md#getaccount)
* [getAccounts](_keyring_.keyring.md#getaccounts)
* [getAddress](_keyring_.keyring.md#getaddress)
* [getAddresses](_keyring_.keyring.md#getaddresses)
* [getContract](_keyring_.keyring.md#getcontract)
* [getContracts](_keyring_.keyring.md#getcontracts)
* [getPair](_keyring_.keyring.md#getpair)
* [getPairs](_keyring_.keyring.md#getpairs)
* [isAvailable](_keyring_.keyring.md#isavailable)
* [isPassValid](_keyring_.keyring.md#ispassvalid)
* [loadAll](_keyring_.keyring.md#loadall)
* [restoreAccount](_keyring_.keyring.md#restoreaccount)
* [saveAccount](_keyring_.keyring.md#saveaccount)
* [saveAccountMeta](_keyring_.keyring.md#saveaccountmeta)
* [saveAddress](_keyring_.keyring.md#saveaddress)
* [saveContract](_keyring_.keyring.md#savecontract)
* [saveRecent](_keyring_.keyring.md#saverecent)
* [setDevMode](_keyring_.keyring.md#setdevmode)
* [setSS58Format](_keyring_.keyring.md#setss58format)

## Accessors

###  accounts

• **get accounts**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Defined in [Keyring.ts:87](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L87)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  addresses

• **get addresses**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Defined in [Keyring.ts:91](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L91)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  contracts

• **get contracts**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Defined in [Keyring.ts:95](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L95)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  genesisHash

• **get genesisHash**(): *string | undefined*

*Defined in [Keyring.ts:174](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L174)*

**Returns:** *string | undefined*

___

###  keyring

• **get keyring**(): *KeyringInstance*

*Defined in [Keyring.ts:99](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L99)*

**Returns:** *KeyringInstance*

## Methods

###  addExternal

▸ **addExternal**(`address`: string | Uint8Array, `meta`: KeyringPair$Meta): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:116](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L116)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`meta` | KeyringPair$Meta |  {} |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  addPair

▸ **addPair**(`pair`: KeyringPair, `password`: string): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:107](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  addUri

▸ **addUri**(`suri`: string, `password?`: undefined | string, `meta`: KeyringPair$Meta, `type?`: KeypairType): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:125](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L125)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`password?` | undefined &#124; string | - |
`meta` | KeyringPair$Meta |  {} |
`type?` | KeypairType | - |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  backupAccount

▸ **backupAccount**(`pair`: KeyringPair, `password`: string): *KeyringPair$Json*

*Defined in [Keyring.ts:134](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *KeyringPair$Json*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta`: KeyringPair$Meta, `type?`: KeypairType): *KeyringPair*

*Implementation of [KeyringStruct](../interfaces/_types_.keyringstruct.md)*

*Defined in [Keyring.ts:144](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L144)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`meta` | KeyringPair$Meta |  {} |
`type?` | KeypairType | - |

**Returns:** *KeyringPair*

___

###  decodeAddress

▸ **decodeAddress**(`key`: string | Uint8Array, `ignoreChecksum?`: undefined | false | true, `ss58Format?`: Prefix): *Uint8Array*

*Defined in [Keyring.ts:50](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ignoreChecksum?` | undefined &#124; false &#124; true |
`ss58Format?` | Prefix |

**Returns:** *Uint8Array*

___

###  encodeAddress

▸ **encodeAddress**(`key`: string | Uint8Array, `ss58Format?`: Prefix): *string*

*Defined in [Keyring.ts:56](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ss58Format?` | Prefix |

**Returns:** *string*

___

###  encryptAccount

▸ **encryptAccount**(`pair`: KeyringPair, `password`: string): *void*

*Defined in [Keyring.ts:148](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *void*

___

###  forgetAccount

▸ **forgetAccount**(`address`: string): *void*

*Defined in [Keyring.ts:157](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetAddress

▸ **forgetAddress**(`address`: string): *void*

*Defined in [Keyring.ts:162](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetContract

▸ **forgetContract**(`address`: string): *void*

*Defined in [Keyring.ts:166](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  getAccount

▸ **getAccount**(`address`: string | Uint8Array): *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

*Defined in [Keyring.ts:170](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

___

###  getAccounts

▸ **getAccounts**(): *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

*Defined in [Keyring.ts:178](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L178)*

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

___

###  getAddress

▸ **getAddress**(`_address`: string | Uint8Array, `type`: [KeyringItemType](../modules/_types_.md#keyringitemtype) | null): *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

*Defined in [Keyring.ts:322](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L322)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_address` | string &#124; Uint8Array | - |
`type` | [KeyringItemType](../modules/_types_.md#keyringitemtype) &#124; null |  null |

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

___

###  getAddresses

▸ **getAddresses**(): *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

*Defined in [Keyring.ts:341](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L341)*

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

___

###  getContract

▸ **getContract**(`address`: string | Uint8Array): *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

*Defined in [Keyring.ts:234](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

___

###  getContracts

▸ **getContracts**(): *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

*Defined in [Keyring.ts:238](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L238)*

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *KeyringPair*

*Defined in [Keyring.ts:62](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *KeyringPair*

___

###  getPairs

▸ **getPairs**(): *KeyringPair[]*

*Defined in [Keyring.ts:66](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L66)*

**Returns:** *KeyringPair[]*

___

###  isAvailable

▸ **isAvailable**(`_address`: Uint8Array | string): *boolean*

*Defined in [Keyring.ts:72](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | Uint8Array &#124; string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Defined in [Keyring.ts:83](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  loadAll

▸ **loadAll**(`options`: [KeyringOptions](../interfaces/_types_.keyringoptions.md), `injected`: object[]): *void*

*Defined in [Keyring.ts:207](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L207)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_types_.keyringoptions.md) | - |
`injected` | object[] |  [] |

**Returns:** *void*

___

###  restoreAccount

▸ **restoreAccount**(`json`: KeyringPair$Json, `password`: string): *KeyringPair*

*Defined in [Keyring.ts:249](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L249)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | KeyringPair$Json |
`password` | string |

**Returns:** *KeyringPair*

___

###  saveAccount

▸ **saveAccount**(`pair`: KeyringPair, `password?`: undefined | string): *KeyringPair$Json*

*Defined in [Keyring.ts:195](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password?` | undefined &#124; string |

**Returns:** *KeyringPair$Json*

___

###  saveAccountMeta

▸ **saveAccountMeta**(`pair`: KeyringPair, `meta`: KeyringPair$Meta): *void*

*Defined in [Keyring.ts:269](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`meta` | KeyringPair$Meta |

**Returns:** *void*

___

###  saveAddress

▸ **saveAddress**(`address`: string, `meta`: KeyringPair$Meta, `type`: [KeyringAddressType](../modules/_types_.md#keyringaddresstype)): *KeyringPair$Json*

*Defined in [Keyring.ts:280](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L280)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`meta` | KeyringPair$Meta | - |
`type` | [KeyringAddressType](../modules/_types_.md#keyringaddresstype) | "address" |

**Returns:** *KeyringPair$Json*

___

###  saveContract

▸ **saveContract**(`address`: string, `meta`: KeyringPair$Meta): *KeyringPair$Json*

*Defined in [Keyring.ts:302](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`meta` | KeyringPair$Meta |

**Returns:** *KeyringPair$Json*

___

###  saveRecent

▸ **saveRecent**(`address`: string): *[SingleAddress](../interfaces/_observable_types_.singleaddress.md)*

*Defined in [Keyring.ts:306](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[SingleAddress](../interfaces/_observable_types_.singleaddress.md)*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Defined in [Keyring.ts:191](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58Format`: number): *void*

*Defined in [Keyring.ts:187](https://github.com/vue-polkadot/vue-ui/blob/52faa75/packages/vue-keyring/src/Keyring.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`ss58Format` | number |

**Returns:** *void*
