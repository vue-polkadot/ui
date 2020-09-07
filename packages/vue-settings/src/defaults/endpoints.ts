// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from '../types'

function createDev(): Option[] {
  return [
    {
      info: 'local',
      text: 'Local Node (Own, 127.0.0.1:9944)',
      value: 'ws://127.0.0.1:9944',
    },
  ]
}

function createLiveNetworks(): Option[] {
  return [
    // fixed, polkadot
    {
      info: 'polkadot',
      text: 'Polkadot (Live, hosted by Parity)',
      value: 'wss://rpc.polkadot.io',
    },
    {
      info: 'polkadot',
      text: 'Polkadot (Live, hosted by Web3 Foundation)',
      value: 'wss://cc1-1.polkadot.network',
    },
    {
      info: 'kusama',
      text: 'Kusama (Polkadot Canary, hosted by Parity)',
      value: 'wss://kusama-rpc.polkadot.io',
    },
    {
      info: 'kusama',
      text: 'Kusama (Polkadot Canary, hosted by Web3 Foundation)',
      value: 'wss://cc3-5.kusama.network',
    },
    // alphabetical based on chain name
    {
      info: 'centrifuge',
      text: 'Centrifuge (Mainnet, hosted by Centrifuge)',
      value: 'wss://fullnode.centrifuge.io',
    },
    {
      info: 'crab',
      text: 'Darwinia Crab (Darwinia Canary, hosted by Darwinia Network)',
      value: 'wss://crab.darwinia.network',
    },
    {
      info: 'edgeware',
      text: 'Edgeware (Mainnet, hosted by Commonwealth Labs)',
      value: 'wss://mainnet1.edgewa.re',
    },
    {
      info: 'kulupu',
      text: 'Kulupu (Kulupu Mainnet, hosted by Kulupu)',
      value: 'wss://rpc.kulupu.corepaper.org/ws',
    },
    {
      info: 'nodle',
      text: 'Nodle Main (Nodle Mainnet, hosted by Nodle)',
      value: 'wss://main1.nodleprotocol.io',
    },
    {
      info: 'plasm',
      text: 'Plasm (Plasm Mainnet, hosted by Stake Technologies)',
      value: 'wss://rpc.plasmnet.io/',
    },
    {
      info: 'subsocial',
      text: 'Subsocial (Subsocial Network, hosted by DappForce)',
      value: 'wss://rpc.subsocial.network',
    },
  ]
}

function createTestNetworks(): Option[] {
  return [
    // polkadot test relays
    {
      info: 'rococo',
      text: 'Rococo (Polkadot Testnet, hosted by Parity)',
      value: 'wss://rococo-rpc.polkadot.io',
    },
    {
      info: 'rococoTick',
      text: 'Tick (Polkadot Testpara, hosted by Parity)',
      value: 'wss://tick-rpc.polkadot.io',
    },
    {
      info: 'rococoTrick',
      text: 'Trick (Polkadot Testpara, hosted by Parity)',
      value: 'wss://trick-rpc.polkadot.io',
    },
    {
      info: 'rococoTrack',
      text: 'Track (Polkadot Testpara, hosted by Parity)',
      value: 'wss://track-rpc.polkadot.io',
    },
    {
      info: 'rococoAcala',
      text: 'Mandala PC1 (Acala Testpara, hosted by Acala)',
      value: 'wss://rococo-1.acala.laminar.one',
    },
    {
      info: 'rococoDarwinia',
      text: 'Darwinia PC1 (Darwinia Testpara, hosted by Darwinia Network)',
      value: 'wss://parachain-rpc.darwinia.network',
    },
    {
      info: 'rococoPlasm',
      text: 'Plasm PC1 (Plasm Testpara, hosted by Stake Technologies)',
      value: 'wss://rpc.parachain.plasmnet.io',
    },
    {
      info: 'rococoLaminar',
      text: 'Turbulence PC1 (Laminar Testpara, hosted by Laminar)',
      value: 'wss://rococo-1.laminar-chain.laminar.one',
    },
    // alphabetical based on chain name
    {
      info: 'centrifuge',
      text: 'Amber (Centrifuge Testnet, hosted by Centrifuge)',
      value: 'wss://fullnode.amber.centrifuge.io',
    },
    {
      info: 'nodle',
      text: 'Arcadia (Nodle Testnet, hosted by Nodle)',
      value: 'wss://arcadia1.nodleprotocol.io',
    },
    {
      info: 'edgeware',
      text: 'Beresheet (Edgeware Testnet, hosted by Commonwealth Labs)',
      value: 'wss://beresheet1.edgewa.re',
    },
    {
      info: 'crust',
      text: 'Crust Maxwell CC2 (Crust Testnet, hosted by Crust Network)',
      value: 'wss://api.crust.network/',
    },
    {
      info: 'dusty',
      text: 'Dusty (Plasm Testnet, hosted by Stake Technologies)',
      value: 'wss://rpc.dusty.plasmnet.io/',
    },
    {
      info: 'substrate',
      text: 'Flaming Fir (Substrate Testnet, hosted by Parity)',
      value: 'wss://substrate-rpc.parity.io',
    },
    {
      info: 'acala',
      text: 'Mandala (Acala Testnet, hosted by Acala)',
      value: 'wss://node-6684611762228215808.jm.onfinality.io/ws',
    },
    {
      info: 'kilt',
      text: 'Mashnet (KILT Canary, hosted by KILT Protocol)',
      value: 'wss://full-nodes.kilt.io:9944/',
    },
    {
      info: 'phala',
      text: 'Phala PoC-2 (Phala Testnet, hosted by Phala Network)',
      value: 'wss://poc2.phala.network/ws',
    },
    {
      info: 'laminar',
      text: 'Turbulence (Laminar Testnet, hosted by Laminar)',
      value: 'wss://testnet-node-1.laminar-chain.laminar.one/ws',
    },
    {
      info: 'westend',
      text: 'Westend (Polkadot Testnet, hosted by Parity)',
      value: 'wss://westend-rpc.polkadot.io',
    },
  ]
}

export const ENDPOINTS: Option[] = [
  ...createLiveNetworks(),
  ...createTestNetworks(),
  ...createDev(),
]

export const ENDPOINT_DEFAULT = createLiveNetworks()[0].value || 'wss://rpc.polkadot.io';
