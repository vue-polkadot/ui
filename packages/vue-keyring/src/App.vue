<template>
  <div id="keyring-wrapper">
    <Keyring/>
  </div>

</template>

<script lang="ts">
import Keyring from './Keyring.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Keyring,
  },
})
export default class Vuekeyring extends Vue {
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
