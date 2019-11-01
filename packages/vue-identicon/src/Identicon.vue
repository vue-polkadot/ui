<template>
  <component :is="currentComponent" :size="size" :iconProperties="iconProperties" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { calculateAddressAndPublicKey } from './utils';
import { IconProperties } from './types';

import { Beachball, Empty, Jdenticon, Polkadot } from './components';

const iconComponents: Record<string, Vue.Component> = {
  beachball: Beachball,
  empty: Empty,
  jdenticon: Jdenticon,
  substrate: Jdenticon,
  polkadot: Polkadot,
  default: Jdenticon,
};

@Component({
  components: {
    ...iconComponents,
  },
})
export default class Identicon extends Vue {
  @Prop() private value!: string;
  @Prop({ default: 128 }) private size!: number;
  @Prop({ default: 'jdenticon' }) private theme!: string;

  get iconProperties(): IconProperties  {
    return calculateAddressAndPublicKey(this.value);
  }

  // https://jsfiddle.net/chrisvfritz/o3nycadu/
  get currentComponent(): string {
    return this.value && this.value.length === 48 ? this.theme : 'empty';
  }
}
</script>


