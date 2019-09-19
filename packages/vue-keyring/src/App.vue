<template>
  <div id="keyring-wrapper">
    <!-- <Keypair
      address="SXYSytZ7wxpQHbRo5FzUFA9wjTfWvTQgYzhVEybWRQvBrvMS" />
    <Keypair
      address="SVyHhpNypEpW8awHeL2XVpEydcedTv1M4AZABcTqMRzx61Ja" />
    <Keypair
      address="SW1wmzX29Ei8mCLxB7crVUhGTkL1TDtCUwpVickwdqBUNunM" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import keyring from './Keyring';
import { Prefix } from '@polkadot/util-crypto/address/types';

@Component({})
export default class Subkey extends Vue {
  public keyring: any = '';

  public mounted(): void {
    // console.log('keyring.VUE');
    this.keyring = keyring.loadAll({
      // genesisHash: 0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b,
      ss58Format: 42, type: 'sr25519',
      isDevelopment: true });

    // console.log(keyring.encodeAddress('0x6674a2958bf589aca9056d57b26f758c50d5aa95aa36dcfbb8659a8bdf7eef6d'));
    // console.log(keyring.decodeAddress('SV4YSr3vJt7nLoE1tMZcpduSNVvvjW5YrPAKUox1BcCr4yZL'));
    // console.log(keyring.getPairs());
    // alice
    // console.log(keyring.getPair('SXYSytZ7wxpQHbRo5FzUFA9wjTfWvTQgYzhVEybWRQvBrvMS'));
  }
}
</script>
