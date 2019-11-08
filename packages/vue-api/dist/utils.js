import { IdentityTypes } from 'edgeware-node-types/dist/identity';
import { VotingTypes } from 'edgeware-node-types/dist/voting';
import { TreasuryRewardTypes } from 'edgeware-node-types/dist/treasuryReward';
import { SignalingTypes } from 'edgeware-node-types/dist/signaling';
const types = {
    edgeware: Object.assign(Object.assign(Object.assign(Object.assign({}, IdentityTypes), VotingTypes), TreasuryRewardTypes), SignalingTypes)
};
const regexes = {
    edgeware: /edgewa/,
};
export const getApiSpecificTypes = (apiUrl) => {
    if (apiUrl.match(regexes.edgeware)) {
        return Object.assign({}, types.edgeware);
    }
    return {};
};
