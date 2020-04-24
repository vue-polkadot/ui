<h1 align="center">vue-api</h1>

<h5 align="center">Singleton wrapper for polkadot api</h5>

## Installation

`npm install --save @vue-polkadot/vue-api`


## Docs

`connect` method returns `Promise<ApiPromise | Error>` 

## Usage Examples

Import vue-api object like

```js
import Connector from '@vue-polkadot/vue-api';
```
Connect to selected node
```js
Connector.connect(store.state.setting.apiUrl);
```

Then in component
```js
async function getChainProperties() {
  const { api } = Connector.getInstance();
  const { chainSS58, chainDecimals, chainToken } = api.registry;
  console.log('[API] Connect <3', { chainSS58, chainDecimals, chainToken});
}
```

