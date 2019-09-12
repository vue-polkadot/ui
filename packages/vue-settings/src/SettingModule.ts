import { SettingsStruct, Option, AvaibleOptions } from './types'
import { CRYPTOS, ENDPOINT_DEFAULT, ENDPOINTS, LANGUAGE_DEFAULT, LANGUAGES, LOCKING_DEFAULT, LOCKING, PREFIX_DEFAULT, PREFIXES, UIMODE_DEFAULT, UIMODES, UITHEME_DEFAULT, UITHEMES } from './defaults/index'
  // import { Store } from 'vuex'

const avaibleOptions: AvaibleOptions = {
  nodes: ENDPOINTS,
  cryptos: CRYPTOS,
  languages: LANGUAGES,
  locking: LOCKING,
  prefixes: PREFIXES,
  uiModes: UIMODES,
  uiThemes: UITHEMES
}

const defaultState: SettingsStruct = {
    apiUrl: ENDPOINT_DEFAULT,
    i18nLang: LANGUAGE_DEFAULT,
    locking: LOCKING_DEFAULT,
    prefix: PREFIX_DEFAULT,
    uiMode: UIMODE_DEFAULT,
    uiTheme: UITHEME_DEFAULT,
    avaibleOptions: avaibleOptions,
}



const SettingModule = {
  state: { ...defaultState },
  mutations: {
    setSettings(state: SettingsStruct, settings: Partial<SettingsStruct>) {
      Object.keys(settings).map((key: string) => {
        (state as any)[key] = (settings as any)[key]
      })
      // state.apiUrl = settings.apiUrl || state.apiUrl;
      // state.i18nLang = settings.i18nLang || state.i18nLang;
      // state.locking = settings.locking || state.locking;
      // state.prefix =  settings.prefix || state.prefix;
      // state.uiMode = settings.uiMode || state.uiMode;
      // state.uiTheme = settings.uiTheme || state.uiTheme;
    },
    addAvaibleOption(state: SettingsStruct, settings: Partial<SettingsStruct>) {

    }
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
    addNode({commit}: any, nodeOption: Option) {
      if (nodeOption.value && nodeOption.text) {
        // ... to be added
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
   getSettings({ avaibleOptions, ...rest }: SettingsStruct) {
     return rest
   }
 }
}

export default SettingModule
