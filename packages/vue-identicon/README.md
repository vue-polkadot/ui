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
<Identicon
  :value="address"
  theme="beachball"
  size="64"
/>
```

