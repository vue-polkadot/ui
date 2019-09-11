
<template>
  <div v-html="generateBeachball" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import generate from '@polkadot/ui-shared/beachballIcon';
import { IconProperties } from '../types';

@Component
export default class Beachball extends Vue {
  @Prop() private size!: number;
  @Prop() private iconProperties!: IconProperties;

  get generateBeachball(): string {
    return generate(this.iconProperties.address, this.size).outerHTML;
  }
}
</script>

