// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type Option = {
  disabled?: boolean;
  info: string;
  text: string;
  value: string | number;
}

export interface SettingsStruct {
  apiUrl: string;
  camera: string;
  i18nLang: string;
  icon: string;
  ledgerConn: string;
  locking: string;
  prefix: number;
  uiMode: string;
  uiTheme: string;
  avaibleOptions: AvaibleOptions;
}

export interface AvaibleOptions {
  nodes: Option[];
  cryptos: Option[];
  languages: Option[];
  locking: Option[];
  prefixes: Option[];
  uiModes: Option[];
  uiThemes: Option[];
  icons: Option[];
  ledgers: Option[];
  cameras: Option[];
}

export interface NetworkSpecsStruct {
  color: string;
  decimals: number;
  genesisHash: string;
  prefix: number;
  title: string;
  unit: string;
}
