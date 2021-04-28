// import { spec as edgewareTypes } from '@edgeware/node-types';
import usetechTypes from './types/usetech'
const options = {
  edgeware: {},
  usetech: {
    types: {
      ...usetechTypes
    }
  }
};

const regexes = {
  edgeware: /edgewa/,
  usetech: /usetech/
};

export const getApiOptions = (apiUrl: string): any => {
  if (regexes.edgeware.test(apiUrl)) {
    return { ...options.edgeware };
  }

  if (regexes.usetech.test(apiUrl)) {
    return { ...options.usetech }
  }

  return {};
};
