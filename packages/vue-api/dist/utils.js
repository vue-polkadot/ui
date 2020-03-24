import * as edgewareDefinitions from "edgeware-node-types/dist/definitions";
const edgewareTypes = Object.values(edgewareDefinitions).reduce((res, { types }) => (Object.assign(Object.assign({}, res), types)), {});
const options = {
    edgeware: {
        types: Object.assign(Object.assign({}, edgewareTypes), { "voting::VoteType": "VoteType", "voting::TallyType": "TallyType" }),
        typesAlias: {
            voting: { Tally: "VotingTally" }
        }
    }
};
const regexes = {
    edgeware: /edgewa/
};
export const getApiOptions = (apiUrl) => {
    if (apiUrl.match(regexes.edgeware)) {
        return Object.assign({}, options.edgeware);
    }
    return {};
};
