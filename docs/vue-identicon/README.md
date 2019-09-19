[vue-polkadot UI Libraries](README.md) › [Globals](globals.md)

# vue-polkadot UI Libraries

<h1 align="center">vue-identicon</h1>

<!-- <h5 align="center">Identicon</h5> -->

## Installation
`npm install --save @vue-polkadot/vue-identicon`

## Props

| Name  | Description                 | Type   | Default   |
|-------|-----------------------------|--------|-----------|
| value | Address for generating icon | String | null      |
| theme | Theme for icon              | String | jdenticon |
| size  | Size of icon                | Number | 128       |

## Usage

```js
<template>
  <Identicon
    :value="address"
    :theme="theme"
    :size="size"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Identicon from '@vue-polkadot/vue-identicon';

@Component({
  components: {
    Identicon,
  },
})
export default class Keypair extends Vue {
  @Prop(String) public address!: string;
  @Prop({ default: 'polkadot'}) public theme!: string;
  @Prop({ default: 64 }) public size!: number;
}
</script>
```

## FAQ

* Themes?
  * Yes, there are themes `'polkadot', 'substrate', 'beachball' or 'jdenticon'`
