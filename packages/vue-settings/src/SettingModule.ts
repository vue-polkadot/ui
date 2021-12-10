import { SettingsStruct, Option, AvaibleOptions, StoreContext } from './types'
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
  INDEXERS,
  INDEXER_DEFAULT,
  URL_PREFIXES,
  URL_PREFIX_DEFAULT
} from './defaults/index'
import { equalsOrLocal } from './utils'

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
  urlPrefixes: URL_PREFIXES,
  indexers: INDEXERS,
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
  urlPrefix: URL_PREFIX_DEFAULT,
  indexer: INDEXER_DEFAULT,
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
  },
  actions: {
    setSettings({ commit }: StoreContext, settings: Partial<SettingsStruct>) {
      commit('setSettings', settings)
    },
    setApiUrl({ commit }: StoreContext, apiUrl: string) {
      commit('setSettings', { apiUrl })
    },
    setLanguage({ commit }: StoreContext, i18nLang: string) {
      commit('setSettings', { i18nLang })
    },
    setLocking({ commit }: StoreContext, locking: string) {
      commit('setSettings', { locking })
    },
    setPrefix({ commit }: StoreContext, prefix: string) {
      commit('setSettings', { prefix })
    },
    setUiTheme({ commit }: StoreContext, uiTheme: string) {
      commit('setSettings', { uiTheme })
    },
    setPagination({ commit }: StoreContext, pagination: string) {
      commit('setSettings', { pagination })
    },
    setDisplay({ commit }: StoreContext, display: string) {
      commit('setSettings', { display })
    },
    setShowOption({ commit }: StoreContext, show: string) {
      commit('setSettings', { show })
    },
    setUrlPrefix({ commit }: StoreContext, urlPrefix: string) {
      commit('setSettings', { urlPrefix })
    },
    setIndexer({ commit }: StoreContext, indexer: string) {
      commit('setSettings', { indexer })
    },
    setIcon({ commit }: StoreContext, icon: string) {
      commit('setSettings', { icon })
    },
    addNode({ commit }: StoreContext, nodeOption: Option) {
      if (nodeOption.value && nodeOption.text) {
        commit('createNode', nodeOption)
      }
    },
  },
  getters: {
    availableUrlPrefixes(state: SettingsStruct): Option[] {
      return state.avaibleOptions.urlPrefixes
    },
    availableIndexers(state: SettingsStruct): Option[] {
      return state.avaibleOptions.indexers
    },
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
    currentChainByPrefix(state: SettingsStruct): string | undefined {
      return state.avaibleOptions.urlPrefixes.find(
        (prefix: Option) => prefix.value === state.urlPrefix
      )?.info
    },
    availableNodesByPrefix(state: SettingsStruct, getters: any): Option[] {
      const eq = equalsOrLocal(getters.currentChainByPrefix)
      return state.avaibleOptions.nodes.filter(eq)
    },
    availableIndexerByPrefix(state: SettingsStruct, getters: any): Option[] {
      const eq = equalsOrLocal(getters.currentChainByPrefix)
      return state.avaibleOptions.indexers.filter(eq)
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
