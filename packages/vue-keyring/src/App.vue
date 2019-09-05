<template>
  <div id="keyring-wrapper">
    <!-- <vuekeyring /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import keyring, { Keyring } from './Keyring';

// console.log(keyring);
// console.log(Keyring);
export default class Subkey extends Keyring {

  public mounted(): void {
    // console.log(keyring);
    this.keyring.encodeAddress('');
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
