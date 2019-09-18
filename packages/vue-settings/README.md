<h1 align="center">vue-settings</h1>

<h5 align="center">Vuex module for polkadot.js settings </h5>

## Installation

`npm install --save @vue-polkadot/vue-settings`

## State Props

| Name           | Description                   | Type   | Default   |
| -------------- | ----------------------------- | ------ | --------- |
| apiUrl         | Selected Url                  | String | null      |
| i18nLang       | Selected language             | String | jdenticon |
| locking        | Selected Locking              | String | 128       |
| prefix         | Prefix                        | Number | 128       |
| uiMode         | UI Mode                       | Number | 128       |
| uiTheme        | UI Theme                      | Number | 128       |
| avaibleOptions | Object of all avaible options | Number | 128       |

## Mutations

| Name        | Description  | Params   | Types                   |
| ----------- | ------------ | -------- | ----------------------- |
| setSettings | Set settings | settings | Partial<SettingsStruct> |

## Getters

| Name               | Description                   | Returns        |
| ------------------ | ----------------------------- | -------------- |
| availableNodes     | List of Nodes                 | Option[]       |
| availableLanguages | List of Languages             | Option[]       |
| availableCryptos   | List of Cryptographic modes   | Option[]       |
| availableLocking   | List of Locking               | Option[]       |
| availablePrefixes  | List of Prefixes              | Option[]       |
| availableUiModes   | List of UI Modes              | Option[]       |
| availableUiThemes  | List of UI Themes             | Option[]       |
| getSettings        | Object of all avaible options | SettingsStruct |

## Usage Examples

import `SettingModule` to your store as module

```js
import Vue from 'vue'
import Vuex from 'vuex'
import SettingModule from '@vue-polkadot/vue-settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    setting: SettingModule,
  },
})
```

now you can use getters and actions inside your component (Using Vue with typescript)

```html
<template>
  <div>
    <div v-for="option in options">
      <span>{{option.value}}</span>
      <span>{{option.text}}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
    // Getter is like computed
    get options(): Option[] {
      return this.$store.getters.availableNodes
    }
  }
</script>
```
