
<template>
  <div>
    <svg :height="size" viewBox="0 0 64 64" :width="size" >
      <circle cx="50%" cy="50%" fill="#eee" r="50%" />
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Empty extends Vue {
  @Prop() private size!: number;
}
</script>

