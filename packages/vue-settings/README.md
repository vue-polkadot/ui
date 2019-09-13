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

| Name        | Description | Params   | Types                   |
| ----------- | ----------- | -------- | ----------------------- |
| setSettings | Set se      | settings | Partial<SettingsStruct> |

## Actions

| Name        | Description                   | Type   | Default   |
| ----------- | ----------------------------- | ------ | --------- |
| setSettings | Selected Url                  | String | null      |
| setApiUrl   | Selected language             | String | jdenticon |
| setLanguage | Selected Locking              | String | 128       |
| setLocking  | Prefix                        | Number | 128       |
| setPrefix   | UI Mode                       | Number | 128       |
| setUiTheme  | UI Theme                      | Number | 128       |
| setUiMode   | Object of all avaible options | Number | 128       |

## Getters

| Name               | Description                   | Type   | Default   |
| ------------------ | ----------------------------- | ------ | --------- |
| availableNodes     | Selected Url                  | String | null      |
| availableLanguages | Selected language             | String | jdenticon |
| availableCryptos   | Selected Locking              | String | 128       |
| availableLocking   | Prefix                        | Number | 128       |
| availablePrefixes  | UI Mode                       | Number | 128       |
| availableUiModes   | UI Theme                      | Number | 128       |
| availableUiThemes  | Object of all avaible options | Number | 128       |
| getSettings        | Object of all avaible options | Number | 128       |

## Usage

import `SettingModule` to your store as module

```js
import Vue from 'vue'
import Vuex from 'vuex'
import SettingModule from '@vue-polkadot/vue-settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    setting: SettingModule,
  }
})
```

now you can use getters and actions inside your component (Using Vue with typescript)

```
```
