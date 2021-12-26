// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types';

import { isPolkadot } from './type';

const LANGUAGE_DEFAULT = 'default';


const PAGINATION_DEFAULT = '12';

const PAGINATIONS: Option[] = [12, 24, 48].map((value): Option => ({ value, text: value.toString(), info: value.toString() }));

const DISPLAY_DEFAULT = 'large';


const DISPLAYS: Option[] = [
  {
    info: 'large',
    text: 'Large display',
    value: 'large'
  },
  {
    info: 'small',
    text: 'Small display',
    value: 'small'
  }
];

const SHOW_DEFAULT = 'all';

const SHOW_OPTIONS: Option[] = [
  {
    info: 'all',
    text: 'Show all',
    value: 'large'
  },
  {
    info: 'some',
    text: 'Small display',
    value: 'small'
  }
];

const UITHEME_DEFAULT = isPolkadot
  ? 'polkadot'
  : 'substrate';

const UITHEMES: Option[] = [
  {
    info: 'polkadot',
    text: 'Polkadot',
    value: 'polkadot'
  },
  {
    info: 'substrate',
    text: 'Substrate',
    value: 'substrate'
  }
];

const CHANGE_DEFAULT = 'auto';

const CHANGE_OPTIONS: Option[] = [
  {
    info: 'auto',
    text: 'Automatic',
    value: 'auto'
  },
  {
    info: 'manual',
    text: 'Manual (change node && indexer)',
    value: 'manual'
  },
]

const ICON_DEFAULT = 'default';

const ICON_DEFAULT_HOST = isPolkadot
  ? 'polkadot'
  : 'substrate';

const ICONS: Option[] = [
  {
    info: 'default',
    text: 'Default for the connected node',
    value: 'default'
  },
  {
    info: 'polkadot',
    text: 'Polkadot',
    value: 'polkadot'
  },
  {
    info: 'substrate',
    text: 'Substrate',
    value: 'substrate'
  },
  {
    info: 'beachball',
    text: 'Beachball',
    value: 'beachball'
  }
];

const NOTIFICATION_DEFAULT = 'popup';

export {
  ICON_DEFAULT,
  ICON_DEFAULT_HOST,
  ICONS,
  LANGUAGE_DEFAULT,
  NOTIFICATION_DEFAULT,
  PAGINATION_DEFAULT,
  PAGINATIONS,
  SHOW_DEFAULT,
  SHOW_OPTIONS,
  DISPLAY_DEFAULT,
  DISPLAYS,
  UITHEME_DEFAULT,
  UITHEMES,
  CHANGE_DEFAULT,
  CHANGE_OPTIONS,
};
