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
    info: 'statemine',
    text: 'Statemine (Parity)',
    value: 'wss://kusama-statemine-rpc.paritytech.net'
  },
  {
    info: 'westend',
    text: 'Westend (Parity)',
    value: 'wss://westend-rpc.polkadot.io'
  },
  {
    info: 'westmint',
    text: 'Westmint (Parity)',
    value: 'wss://westmint-rpc.polkadot.io'
  },
  {
    info: 'basilisk',
    text: 'Basilisk (HydraDX)',
    value: 'wss://rpc-01.basilisk.hydradx.io'
  },
  {
    info: 'basilisk',
    text: 'Basilisk Egg (HydraDX)',
    value: 'wss://rpc-01.basilisk-testnet.hydradx.io'
  },
  {
    info: 'dusty',
    text: 'Dusty (Stake Technologies)',
    value: 'wss://rpc.dusty.plasmnet.io'
  },
  {
    info: 'snek',
    text: 'Snek Sandbox (HydraDX)',
    value: 'wss://basilisk-kodadot.hydration.cloud'
  },
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  },
  {
    info: 'parachain',
    text: 'Local Parachain Node (Own, 127.0.0.1:9988)',
    value: 'ws://127.0.0.1:9988/'
  }
];

export const ENDPOINT_DEFAULT = ENDPOINTS[0].value || 'wss://kusama-rpc.polkadot.io';
