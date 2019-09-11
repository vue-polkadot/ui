<template>
<div id="icon-wrapper">
  <Identicon :value="address" theme="beachball" />
  <Identicon :value="address" theme="polkadot" />
  <Identicon :value="address"  />
  <Identicon />
  </div>
</template>

<script lang="ts">
import Identicon from './Identicon.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Identicon,
  },
})
export default class Subkey extends Vue {

  public address: string = '5HisFhfg1dNGQQBgxh4ar7wyVtG4bsaSRK3nWZkB5t28hbLM';
}

</script>

<style scoped>
 #icon-wrapper {
   display: flex;
  flex-direction: row;
 }
</style>
