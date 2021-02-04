// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Option } from '../types';

export const ENDPOINTS: Option[] = [
  {
    info: 'kusama',
    text: 'Kusama (Parity)',
    value: 'wss://kusama-rpc.polkadot.io'
  },
  {
    info: 'kusama',
    text: 'Kusama (OnFinality)',
    value: 'wss://kusama.api.onfinality.io/public-ws'
  },
  {
    info: 'kusama',
    text: 'Kusama (Patract Elara)',
    value: 'wss://kusama.elara.patract.io'
  },
  {
    info: 'polkadot',
    text: 'Polkadot (Parity)',
    value: 'wss://rpc.polkadot.io'
  },
  {
    info: 'polkadot',
    text: 'Polkadot (OnFinality)',
    value: 'wss://polkadot.api.onfinality.io/public-ws'
  },
  {
    info: 'polkadot',
    text: 'Polkadot (Patract Elara)',
    value: 'wss://polkadot.elara.patract.io'
  },
  {
    info: 'centrifuge',
    text: 'Centrifuge (Centrifuge)',
    value: 'wss://fullnode.centrifuge.io'
  },
  {
    info: 'crab',
    text: 'Darwinia Crab (Darwinia Network)',
    value: 'wss://crab.darwinia.network'
  },
  {
    info: 'chainx',
    text: 'ChainX (ChainX)',
    value: 'wss://mainnet.chainx.org/ws'
  },
  {
    info: 'chainx',
    text: 'ChainX (Patract Elara)',
    value: 'wss://chainx.elara.patract.io'
  },
  {
    info: 'darwinia',
    text: 'Darwinia (Darwinia Network)',
    value: 'wss://cc1.darwinia.network'
  },
  {
    info: 'darwinia',
    text: 'Darwinia (Patract Elara)',
    value: 'wss://darwinia.elara.patract.io'
  },
  {
    info: 'dock-mainnet',
    text: 'Dock (Dock Association)',
    value: 'wss://mainnet-node.dock.io'
  },
  {
    info: 'dock-mainnet',
    text: 'Dock (Patract Elara)',
    value: 'wss://dock.elara.patract.io'
  },
  {
    info: 'edgeware',
    text: 'Edgeware (Commonwealth Labs)',
    value: 'wss://mainnet4.edgewa.re'
  },
  {
    info: 'edgeware',
    text: 'Edgeware (Patract Elara)',
    value: 'wss://edgeware.elara.patract.io'
  },
  {
    info: 'equilibrium',
    text: 'Equilibrium (Equilibrium)',
    value: 'wss://tge.equilibrium.io'
  },
  {
    info: 'hanonycash',
    text: 'Hanonycash (Hanonycash)',
    value: 'wss://rpc.hanonycash.com'
  },
  {
    info: 'kulupu',
    text: 'Kulupu (Kulupu)',
    value: 'wss://rpc.kulupu.corepaper.org/ws'
  },
  {
    info: 'kulupu',
    text: 'Kulupu (Patract Elara)',
    value: 'wss://kulupu.elara.patract.io'
  },
  {
    info: 'nodle',
    text: 'Nodle (Nodle)',
    value: 'wss://main1.nodleprotocol.io'
  },
  {
    info: 'nodle',
    text: 'Nodle (Patract Elara)',
    value: 'wss://nodle.elara.patract.io'
  },
  {
    info: 'plasm',
    text: 'Plasm (Stake Technologies)',
    value: 'wss://rpc.plasmnet.io/'
  },
  {
    info: 'plasm',
    text: 'Plasm (Patract Elara)',
    value: 'wss://plasm.elara.patract.io'
  },
  {
    info: 'stafi',
    text: 'Stafi (Stafi Foundation)',
    value: 'wss://mainnet-rpc.stafi.io'
  },
  {
    info: 'stafi',
    text: 'Stafi (Patract Elara)',
    value: 'wss://stafi.elara.patract.io'
  },
  {
    info: 'subsocial',
    text: 'Subsocial (DappForce)',
    value: 'wss://rpc.subsocial.network'
  },
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  }
];

export const ENDPOINT_DEFAULT = ENDPOINTS[0].value || 'wss://kusama-rpc.polkadot.io';
