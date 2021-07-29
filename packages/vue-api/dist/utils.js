// import { spec as edgewareTypes } from '@edgeware/node-types';
import usetechTypes from './types/usetech';
import basiliskTypes from './types/basilisk';
const options = {
    edgeware: {},
    usetech: {
        types: Object.assign({}, usetechTypes)
    },
    basilisk: {
        types: Object.assign({}, basiliskTypes)
    }
};
const regexes = {
    edgeware: /edgewa/,
    usetech: /usetech/,
    basilisk: /basilisk/
};
export const getApiOptions = (apiUrl) => {
    if (regexes.basilisk.test(apiUrl)) {
        return Object.assign({}, options.basilisk);
    }
    if (regexes.edgeware.test(apiUrl)) {
        return Object.assign({}, options.edgeware);
    }
    if (regexes.usetech.test(apiUrl)) {
        return Object.assign({}, options.usetech);
    }
    return {};
};
