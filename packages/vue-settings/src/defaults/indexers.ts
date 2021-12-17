// Copyright 2021 @kodadot authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types';


export const INDEXERS: Option[] = [
  {
    info: 'kusama',
    text: 'Kusama (magick EU)',
    value: 'https://sz.api.subquery.network/sq/vikiival/magick'
  },
  {
    info: 'kusama',
    text: 'Kusama (magick)',
    value: 'https://api.subquery.network/sq/vikiival/magick'
  },
  {
    info: 'statemine',
    text: 'Statemine (unique)',
    value: 'https://api.subquery.network/sq/kodadot/unique'
  },
  {
    info: 'westend',
    text: 'Westend (magick-west)',
    value: 'https://api.subquery.network/sq/vikiival/magick-west'
  },
  {
    info: 'westmint',
    text: 'Westmint (unique-west)',
    value: 'https://api.subquery.network/sq/vikiival/unique-west'
  },
  {
    info: 'local',
    text: 'Local Indexer (127.0.0.1:3000)',
    value: 'http://127.0.0.1:3000'
  },
];

export const INDEXER_DEFAULT: string = INDEXERS[0].value as string || 'https://api.subquery.network/sq/vikiival/magick';

