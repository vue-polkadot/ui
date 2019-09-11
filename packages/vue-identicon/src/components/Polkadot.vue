
<template>
  <div v-html="generateCircles" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import generateIcon, { Circle } from '@polkadot/ui-shared/polkadotIcon';
import { IconProperties } from '../types';

@Component
export default class Polkadot extends Vue {
  @Prop() private size!: number;
  @Prop() private iconProperties!: IconProperties;

  get generateCircles(): string {
    return `<svg
    height=${this.size}
    viewBox='0 0 64 64'
    width=${this.size}>
    ${generateIcon(this.iconProperties.address).map(this.renderCircle).join('')}
    </svg>`;
  }

  private renderCircle({ cx, cy, r, fill }: Circle): string {
    return `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`;

  }
}
</script>

