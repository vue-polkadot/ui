import { SettingsStruct, Option, AvaibleOptions } from './types'
import { CRYPTOS, ENDPOINT_DEFAULT, ENDPOINTS, LANGUAGE_DEFAULT, LOCKING_DEFAULT, LOCKING, PREFIX_DEFAULT, PREFIXES, UIMODE_DEFAULT, UIMODES, UITHEME_DEFAULT, UITHEMES, ICONS, ICON_DEFAULT, CAMERA_DEFAULT, LEDGER_CONN_DEFAULT, CAMERA, LEDGER_CONN } from './defaults/index'

const avaibleOptions: AvaibleOptions = {
  nodes: ENDPOINTS,
  cryptos: CRYPTOS,
  languages: [],
  locking: LOCKING,
  prefixes: PREFIXES,
  uiModes: UIMODES,
  uiThemes: UITHEMES,
  icons: ICONS,
  cameras: CAMERA,
  ledgers: LEDGER_CONN,
}

const defaultState: SettingsStruct = {
  apiUrl: ENDPOINT_DEFAULT as string,
  camera: CAMERA_DEFAULT,
  ledgerConn: LEDGER_CONN_DEFAULT,
  i18nLang: LANGUAGE_DEFAULT,
  icon: ICON_DEFAULT,
  locking: LOCKING_DEFAULT,
  prefix: PREFIX_DEFAULT,
  uiMode: UIMODE_DEFAULT,
  uiTheme: UITHEME_DEFAULT,
  avaibleOptions: avaibleOptions
};


const SettingModule = {
  state: { ...defaultState },
  mutations: {
    setSettings(state: SettingsStruct, settings: Partial<SettingsStruct>) {
      Object.keys(settings).map((key: string) => {
        (state as any)[key] = (settings as any)[key]
      })
    },
    createNode(state: SettingsStruct, nodeOption: Option) {
      state.avaibleOptions.nodes = [...state.avaibleOptions.nodes, nodeOption]
    }
    // addAvaibleOption(state: SettingsStruct, settings: Partial<SettingsStruct>) {

    // }
  },
  actions: {
    setSettings({commit}: any, settings: Partial<SettingsStruct>) {
      commit('setSettings', settings);
    },
    setApiUrl({commit}: any, apiUrl: string) {
      commit('setSettings', { apiUrl });
    },
    setLanguage({commit}: any, i18nLang: string) {
      commit('setSettings', { i18nLang });
    },
    setLocking({commit}: any, locking: string) {
      commit('setSettings', { locking });
    },
    setPrefix({commit}: any, prefix: string) {
      commit('setSettings', { prefix });
    },
    setUiTheme({commit}: any, uiTheme: string) {
      commit('setSettings', { uiTheme });
    },
    setUiMode({commit}: any, uiMode: string) {
      commit('setSettings', { uiMode });
    },
    setIcon({commit}: any, icon: string) {
      commit('setSettings', { icon });
    },
    addNode({commit}: any, nodeOption: Option) {
      if (nodeOption.value && nodeOption.text) {
        commit('createNode', nodeOption);
      }
    }
  },
 getters: {
  availableNodes(state: SettingsStruct): Option[] {
     return state.avaibleOptions.nodes
   },
   availableLanguages(state: SettingsStruct): Option[] {
    return state.avaibleOptions.languages
  },
  availableCryptos(state: SettingsStruct): Option[] {
    return state.avaibleOptions.cryptos
  },
  availableLocking(state: SettingsStruct): Option[] {
    return state.avaibleOptions.locking
  },
  availablePrefixes(state: SettingsStruct): Option[] {
    return state.avaibleOptions.prefixes
  },
  availableUiModes(state: SettingsStruct): Option[] {
    return state.avaibleOptions.uiModes
  },
  availableUiThemes(state: SettingsStruct): Option[] {
    return state.avaibleOptions.uiThemes
  },
  availableIcons(state: SettingsStruct): Option[] {
    return state.avaibleOptions.icons
  },
   getSettings({ avaibleOptions, ...rest }: SettingsStruct) {
     return rest
   }
 }
}

export default SettingModule
