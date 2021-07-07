// import { spec as edgewareTypes } from '@edgeware/node-types';
import usetechTypes from './types/usetech';
const options = {
    edgeware: {},
    usetech: {
        types: Object.assign({}, usetechTypes)
    }
};
const regexes = {
    edgeware: /edgewa/,
    usetech: /usetech/
};
export const getApiOptions = (apiUrl) => {
    if (regexes.edgeware.test(apiUrl)) {
        return Object.assign({}, options.edgeware);
    }
    if (regexes.usetech.test(apiUrl)) {
        return Object.assign({}, options.usetech);
    }
    return {};
};
