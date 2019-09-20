<h1 align="center">vue-settings</h1>

<h5 align="center">Vuex module for polkadot.js settings </h5>

## Installation

`npm install --save @vue-polkadot/vue-settings`

## State Props

| Name           | Description                   |
| -------------- | ----------------------------- |
| apiUrl         | Selected Url                  |
| i18nLang       | Selected language             |
| locking        | Selected Locking              |
| prefix         | Prefix                        |
| uiMode         | UI Mode                       |
| uiTheme        | UI Theme                      |
| avaibleOptions | Object of all avaible options |

## Mutations

| Name        | Description  | Params   | Types                   |
| ----------- | ------------ | -------- | ----------------------- |
| setSettings | Set settings | settings | SettingsStruct |

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
