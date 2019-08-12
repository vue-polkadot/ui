
<template>
  <div v-html="generateJdenticon" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import jdenticon from 'jdenticon';
import { IconProperties } from '../types';

@Component
export default class Jdenticon extends Vue {
  @Prop() private size!: number;
  @Prop() private iconProperties!: IconProperties;

  get generateJdenticon(): string {
    return jdenticon.toSvg(this.iconProperties.publicKey.substr(2), this.size);
  }
}
</script>

