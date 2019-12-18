<h1 align="center">vue-api</h1>

<h5 align="center">Singleton wrapper for polkadot api</h5>

## Installation

`npm install --save @vue-polkadot/vue-api`


## Usage Examples

Import vue-api object like

```js
import Connector from '@vue-polkadot/vue-api';
```
Create singleton instance:
```js
Connector.createInstance(store.state.setting.apiUrl);
```
Connect this instance to `$http` property
```js
Vue.prototype.$http = Connector.getInstance();
```

Then in component
```js
async function getToBalance() {
  const toBalance = await (this as any).$http.api.query.balances.freeBalance(this.transfer.to);
  this.transfer.toBalance = await toBalance.toString();
}
```
