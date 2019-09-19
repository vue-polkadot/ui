[vue-polkadot UI Libraries](../README.md) › [Globals](../globals.md) › ["defaults/endpoints"](_defaults_endpoints_.md)

# External module: "defaults/endpoints"

## Index

### Variables

* [ENDPOINTS](_defaults_endpoints_.md#const-endpoints)
* [ENDPOINT_DEFAULT](_defaults_endpoints_.md#const-endpoint_default)

## Variables

### `Const` ENDPOINTS

• **ENDPOINTS**: *[Option](_types_.md#option)[]* =  ORDER_CHAINS.reduce((endpoints: Option[], chainName): Option[] => {
  const { chainDisplay, logo, type } = CHAIN_INFO[chainName];

  return ORDER_PROVIDERS.reduce((endpoints: Option[], providerName): Option[] => {
    const { providerDisplay, nodes } = PROVIDERS[providerName];
    const wssUrl = nodes[chainName];

    if (wssUrl) {
      endpoints.push({
        info: logo,
        text: `${chainDisplay} (${type}, hosted by ${providerDisplay}}`,
        value: wssUrl
      });
    }

    return endpoints;
  }, endpoints);
}, [])

*Defined in [defaults/endpoints.ts:88](https://github.com/vue-polkadot/vue-ui/blob/f2fb111/packages/vue-settings/src/defaults/endpoints.ts#L88)*

___

### `Const` ENDPOINT_DEFAULT

• **ENDPOINT_DEFAULT**: *undefined | string* =  isPolkadot
  ? PROVIDERS.parity.nodes.kusama
  : PROVIDERS.parity.nodes.flamingFir

*Defined in [defaults/endpoints.ts:84](https://github.com/vue-polkadot/vue-ui/blob/f2fb111/packages/vue-settings/src/defaults/endpoints.ts#L84)*
