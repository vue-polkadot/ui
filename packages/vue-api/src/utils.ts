import { RegistryTypes } from '@polkadot/types/types'

export type ApiExtension = { types?: RegistryTypes }
export type ApiExtensionMap = Record<string, ApiExtension>;

const options: ApiExtensionMap = {
  edgeware: {},
  usetech: {},
  basilisk: {}
};

const regexes = {
  edgeware: /edgewa/,
  usetech: /usetech/,
  basilisk: /basilisk/
};

export const getApiOptions = (apiUrl: string): any => {
  if (regexes.basilisk.test(apiUrl)) {
    return { ...options.basilisk };
  }

  if (regexes.edgeware.test(apiUrl)) {
    return { ...options.edgeware };
  }

  if (regexes.usetech.test(apiUrl)) {
    return { ...options.usetech }
  }

  return {};
};
