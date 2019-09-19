[vue-polkadot UI Libraries](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [KeyringStore](_types_.keyringstore.md)

# Interface: KeyringStore

## Hierarchy

* **KeyringStore**

## Implemented by

* [BrowserStore](../classes/_stores_browser_.browserstore.md)

## Index

### Properties

* [all](_types_.keyringstore.md#all)
* [get](_types_.keyringstore.md#get)
* [remove](_types_.keyringstore.md#remove)
* [set](_types_.keyringstore.md#set)

## Properties

###  all

• **all**: *function*

*Defined in [types.ts:19](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/types.ts#L19)*

#### Type declaration:

▸ (`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: [KeyringJson](_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](_types_.keyringjson.md) |

___

###  get

• **get**: *function*

*Defined in [types.ts:20](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/types.ts#L20)*

#### Type declaration:

▸ (`key`: string, `cb`: function): *void*

**Parameters:**

▪ **key**: *string*

▪ **cb**: *function*

▸ (`value`: [KeyringJson](_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [KeyringJson](_types_.keyringjson.md) |

___

###  remove

• **remove**: *function*

*Defined in [types.ts:21](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/types.ts#L21)*

#### Type declaration:

▸ (`key`: string, `cb?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined &#124; function |

___

###  set

• **set**: *function*

*Defined in [types.ts:22](https://github.com/vue-polkadot/vue-ui/blob/ed1485a/packages/vue-keyring/src/types.ts#L22)*

#### Type declaration:

▸ (`key`: string, `value`: [KeyringJson](_types_.keyringjson.md), `cb?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](_types_.keyringjson.md) |
`cb?` | undefined &#124; function |
