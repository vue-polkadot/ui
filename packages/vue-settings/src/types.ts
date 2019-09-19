// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type Option = {
  disabled?: boolean;
  info: string;
  text: string;
  value: string | number;
}

export interface SettingsStruct {
  apiUrl: string | undefined;
  i18nLang: string;
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
}