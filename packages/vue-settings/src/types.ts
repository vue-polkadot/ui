// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type Option = {
  disabled?: boolean;
  info: string;
  text: string;
  value: string | number;
}

export type Options = Option[];

export interface SettingsStruct {
  apiUrl: string;
  camera: string;
  i18nLang: string;
  icon: string;
  ledgerConn: string;
  locking: string;
  prefix: number;
  uiTheme: string;
  pagination: string,
  display: string,
  show: string,
  urlPrefix: string,
  indexer: string,
  avaibleOptions: AvaibleOptions;
  change: string;
}

export interface AvaibleOptions {
  nodes: Options;
  cryptos: Options;
  languages: Options;
  locking: Options;
  prefixes: Options;
  paginations: Options,
  displays: Options,
  showOptions: Options,
  uiThemes: Options;
  icons: Options;
  ledgers: Options;
  cameras: Options;
  urlPrefixes: Options;
  indexers: Options;
  changes: Options;
}

export interface NetworkSpecsStruct {
  color: string;
  decimals: number;
  genesisHash: string;
  prefix: number;
  title: string;
  unit: string;
}

export type StoreContext = {
  commit: (type: string, payload?: any, options?: Object) => void;
  state: SettingsStruct;
  dispatch: (type: string, payload?: any, options?: Object) => Promise<any>;
}
