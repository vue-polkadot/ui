import { SettingsStruct, Option, AvaibleOptions, StoreInstance } from './types'
import {
  CRYPTOS,
  ENDPOINT_DEFAULT,
  ENDPOINTS,
  LANGUAGE_DEFAULT,
  LOCKING_DEFAULT,
  LOCKING,
  PREFIX_DEFAULT,
  PREFIXES,
  PAGINATION_DEFAULT,
  PAGINATIONS,
  SHOW_DEFAULT,
  SHOW_OPTIONS,
  DISPLAY_DEFAULT,
  DISPLAYS,
  UITHEME_DEFAULT,
  UITHEMES,
  ICONS,
  ICON_DEFAULT,
  CAMERA_DEFAULT,
  LEDGER_CONN_DEFAULT,
  CAMERA,
  LEDGER_CONN,
} from './defaults/index'

const avaibleOptions: AvaibleOptions = {
  nodes: ENDPOINTS,
  cryptos: CRYPTOS,
  languages: [],
  locking: LOCKING,
  prefixes: PREFIXES,
  paginations: PAGINATIONS,
  displays: DISPLAYS,
  showOptions: SHOW_OPTIONS,
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
  pagination: PAGINATION_DEFAULT,
  display: DISPLAY_DEFAULT,
  show: SHOW_DEFAULT,
  uiTheme: UITHEME_DEFAULT,
  avaibleOptions: avaibleOptions,
}

const SettingModule = {
  state: { ...defaultState },
  mutations: {
    setSettings(state: SettingsStruct, settings: Partial<SettingsStruct>) {
      Object.keys(settings).map((key: string) => {
        ;(state as any)[key] = (settings as any)[key]
      })
    },
    createNode(state: SettingsStruct, nodeOption: Option) {
      state.avaibleOptions.nodes = [...state.avaibleOptions.nodes, nodeOption]
    },
    // addAvaibleOption(state: SettingsStruct, settings: Partial<SettingsStruct>) {

    // }
  },
  actions: {
    setSettings({ commit }: StoreInstance, settings: Partial<SettingsStruct>) {
      commit('setSettings', settings)
    },
    setApiUrl({ commit }: StoreInstance, apiUrl: string) {
      commit('setSettings', { apiUrl })
    },
    setLanguage({ commit }: StoreInstance, i18nLang: string) {
      commit('setSettings', { i18nLang })
    },
    setLocking({ commit }: StoreInstance, locking: string) {
      commit('setSettings', { locking })
    },
    setPrefix({ commit }: StoreInstance, prefix: string) {
      commit('setSettings', { prefix })
    },
    setUiTheme({ commit }: StoreInstance, uiTheme: string) {
      commit('setSettings', { uiTheme })
    },
    setPagination({ commit }: StoreInstance, pagination: string) {
      commit('setSettings', { pagination })
    },
    setDisplay({ commit }: StoreInstance, display: string) {
      commit('setSettings', { display })
    },
    setShowOption({ commit }: StoreInstance, show: string) {
      commit('setSettings', { show })
    },
    setIcon({ commit }: StoreInstance, icon: string) {
      commit('setSettings', { icon })
    },
    addNode({ commit }: StoreInstance, nodeOption: Option) {
      if (nodeOption.value && nodeOption.text) {
        commit('createNode', nodeOption)
      }
    },
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
    availablePaginations(state: SettingsStruct): Option[] {
      return state.avaibleOptions.paginations
    },
    availableDisplays(state: SettingsStruct): Option[] {
      return state.avaibleOptions.displays
    },
    availableShowOptions(state: SettingsStruct): Option[] {
      return state.avaibleOptions.showOptions
    },
    availableUiThemes(state: SettingsStruct): Option[] {
      return state.avaibleOptions.uiThemes
    },
    availableIcons(state: SettingsStruct): Option[] {
      return state.avaibleOptions.icons
    },
    getSettings({ avaibleOptions, ...rest }: SettingsStruct) {
      return rest
    },
  },
}

export function Module(overrideDefault: Partial<SettingsStruct>) {
  return {
    ...SettingModule,
    state: {
      ...SettingModule.state,
      ...overrideDefault,
    },
  }
}

export default SettingModule
