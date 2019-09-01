
# @vue-polkadot/vue-keyring

A wrapper extending the base `@polkadot/keyring` interface for usage in the browser: Key management of user accounts including generation and retrieval of keyring pairs from a variety of input combinations.

## Usage Examples

All module methods are exposed through a single default export.

### Regular
```js
import keyring from '@vue-polkadot/vue-keyring'

```

## FAQ

- Difference between Keyring Accounts and Addresses?
  - From the perspective of the keyring, it saves a particular user's unlocked identities as an account, a la keyring.saveAccount(pair, password). So with these accounts you are able to send and sign transactions.
  - To save addresses without unlocking them (i.e. because a user might want to have easy access to addresses they frequently transact with), use keyring.saveAddress(address, meta)
- What are 'external' accounts, i.e. when to set the `isExternal` meta key to true?
  - An external account is one where the keys are not managed by keyring, e.g. in Parity Signer or Ledger Nano.
- SS58 Encode / Decode?
  -  SS58 is a simple address format designed for Substrate based chains. You can read about its specification in more detail in the [Parity Wiki](https://wiki.parity.io/External-Address-Format-(SS58)).

