// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types';

export const PREFIX_DEFAULT = 'rmrk';

export const PREFIXES: Option[] = [
  {
    info: 'kusama',
    text: 'RMRK (Kusama)',
    value: 'rmrk'
  },
  {
    info: 'westend',
    text: 'RMRK (Westend)',
    value: 'rmrk'
  },
  {
    info: 'statemine',
    text: 'Statemine',
    value: 'statemine'
  },
  {
    info: 'westmint',
    text: 'Westmint',
    value: 'westmint'
  },
  {
    info: 'basilisk',
    text: 'Basilisk',
    value: 'bsx'
  }
];
