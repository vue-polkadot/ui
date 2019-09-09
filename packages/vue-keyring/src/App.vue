<template>
  <div id="keyring-wrapper">
    <!-- <vuekeyring /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import keyringInstance from './VueKeyring';

// console.log(keyring);
// console.log(Keyring);
@Component({})
export default class Subkey extends Vue {

  public mounted(): void {
    console.log('keyring.VUE');
    console.log(keyringInstance.encodeAddress('0x6674a2958bf589aca9056d57b26f758c50d5aa95aa36dcfbb8659a8bdf7eef6d'));
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
