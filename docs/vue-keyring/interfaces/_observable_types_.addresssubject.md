[vue-polkadot UI Libraries](../README.md) › [Globals](../globals.md) › ["observable/types"](../modules/_observable_types_.md) › [AddressSubject](_observable_types_.addresssubject.md)

# Interface: AddressSubject

## Hierarchy

* **AddressSubject**

## Index

### Properties

* [add](_observable_types_.addresssubject.md#add)
* [remove](_observable_types_.addresssubject.md#remove)
* [subject](_observable_types_.addresssubject.md#subject)

## Properties

###  add

• **add**: *function*

*Defined in [observable/types.ts:32](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/observable/types.ts#L32)*

#### Type declaration:

▸ (`store`: [KeyringStore](_types_.keyringstore.md), `address`: string, `json`: [KeyringJson](_types_.keyringjson.md)): *[SingleAddress](_observable_types_.singleaddress.md)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [KeyringStore](_types_.keyringstore.md) |
`address` | string |
`json` | [KeyringJson](_types_.keyringjson.md) |

___

###  remove

• **remove**: *function*

*Defined in [observable/types.ts:33](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/observable/types.ts#L33)*

#### Type declaration:

▸ (`store`: [KeyringStore](_types_.keyringstore.md), `address`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [KeyringStore](_types_.keyringstore.md) |
`address` | string |

___

###  subject

• **subject**: *BehaviorSubject‹[SubjectInfo](_observable_types_.subjectinfo.md)›*

*Defined in [observable/types.ts:34](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/observable/types.ts#L34)*
