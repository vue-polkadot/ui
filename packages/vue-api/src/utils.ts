// import { spec as edgewareTypes } from '@edgeware/node-types';
import usetechTypes from './types/usetech'
import basiliskTypes from './types/basilisk'

const options = {
  edgeware: {},
  usetech: {
    types: {
      ...usetechTypes
    }
  },
  basilisk: {
    types: {
      ...basiliskTypes
    }
  }
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
