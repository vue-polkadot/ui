# @vue-polkadot/vue-identicon

A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot or Kusama

## Usage Examples

To install the component, do

`yarn add @vue-polkadot/vue-identicon`

Inside a Vue component, you can now render any account with the associated icon

```js
<template>
  <Identicon
    :value="5DFwZivYX7hEjBsVH7KGYZYCJMtb75t2aBoeJnzLSLZGPLFn"
    :theme="polkadot"
    :size="64"
  />
</template>

<script>
  import Identicon from '@vue-polkadot/vue-identicon'

  export default {
    components: { Identicon }
  };
</script>
```

## FAQ

* Are there different themes for identicon?
  * Yes, there are
    - `Beachball`
    - `Empty`
    - `Jdenticon`
    - `Polkadot`



