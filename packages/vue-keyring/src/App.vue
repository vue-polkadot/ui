<template>
  <div id="keyring-wrapper">
    <!-- <vuekeyring /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import keyringInstance from './VueKeyring';
import { Prefix } from '@polkadot/util-crypto/address/types';


// console.log(keyring);
// console.log(Keyring);
@Component({})
export default class Subkey extends Vue {

  public keyring: any = '';
  // public addressPrefix = (-1) as Prefix;
  public mounted(): void {
    console.log('keyring.VUE');
    this.keyring = keyringInstance.loadAll({
      addressPrefix: (-1) as Prefix,
      // genesisHash: 0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b,
      isDevelopment: true,
      type: 'ed25519'
    }, []);


    console.log(keyringInstance.encodeAddress('0x6674a2958bf589aca9056d57b26f758c50d5aa95aa36dcfbb8659a8bdf7eef6d'));
    console.log(keyringInstance.decodeAddress('SV4YSr3vJt7nLoE1tMZcpduSNVvvjW5YrPAKUox1BcCr4yZL'));
  }

  // public address = keyring.encodeAddress('');

  // public pair = keyring.getPair(address);

  // public isLocked: boolean = this.pair.isLocked;
  // public meta: object = this.pair.meta;

  // public saveAccount(pair: object, password: string): void {
  //   this.keyring.saveAccount(pair, password);
  // }

  // public saveAddress(address: string, {...meta}: object): void {
  //   this.keyring.saveAddress(address, {...meta});
  // }
}
</script>
