<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import keyringInstance from './VueKeyring';
import { Prefix } from '@polkadot/util-crypto/address/types';

@Component({})
export default class VueKeyring extends Vue {
  public keyring: any = '';
  public mounted(): void {
    this.keyring = keyringInstance.loadAll({
      addressPrefix: (-1) as Prefix,
      isDevelopment: true,
      type: 'ed25519'
    }, []);
  }
}
</script>
