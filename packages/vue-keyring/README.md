
# @vue-polkadot/vue-keyring

A wrapper extending the base `@polkadot/keyring` interface for usage in the browser: Key management of user accounts including generation and retrieval of keyring pairs from a variety of input combinations.

Add it to your project by `yarn add @vue-polkadot/vue-keyring`

## Usage Examples

All module methods are exposed through a single default export.

### Regular
```js
<script lang="ts">
import keyring from '@vue-polkadot/vue-keyring'
import FileSaver from 'file-saver';

@Component({})
export default class Accounts extends Vue {
  // No accounts (or test accounts) should be loaded until after the chain determination.
  // Chain determination occurs outside of Keyring.
  // Loading `keyring.loadAll({ type: 'ed25519' | 'sr25519' })` is triggered
  // from the API after the chain is received
  public loadKeyring(): void {
    keyring.loadAll({
      ss58Format: 42, type: 'sr25519',
      isDevelopment: true });
  }

  public forgetAccount(address: string): void {
    keyring.forgetAccount(address);
  }

  // create json backup of your account
  public makeBackup(address: string, password: string): void {
    if (!address) {
      return;
    }

    try {
      const addressKeyring = address && keyring.getPair(address);
      const json = addressKeyring && keyring.backupAccount(addressKeyring, password);
      const blob = new Blob([JSON.stringify(json)], { type: 'application/json; charset=utf-8' });

      FileSaver.saveAs(blob, `${address}.json`);
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
</script>
```

## FAQ

- Difference between Keyring Accounts and Addresses?
  - From the perspective of the keyring, it saves a particular user's unlocked identities as an account, a la keyring.saveAccount(pair, password). So with these accounts you are able to send and sign transactions.
  - To save addresses without unlocking them (i.e. because a user might want to have easy access to addresses they frequently transact with), use keyring.saveAddress(address, meta)
- What are 'external' accounts, i.e. when to set the `isExternal` meta key to true?
  - An external account is one where the keys are not managed by keyring, e.g. in Parity Signer or Ledger Nano.
- SS58 Encode / Decode?
  -  SS58 is a simple address format designed for Substrate based chains. You can read about its specification in more detail in the [Parity Wiki](https://wiki.parity.io/External-Address-Format-(SS58)).

## Build instruction

`bump package.name version`
`yarn build:rollup`
`npm publish --access public`
