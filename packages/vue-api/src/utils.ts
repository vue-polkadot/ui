import * as edgewareDefinitions from 'edgeware-node-types/interfaces/definitions';
import usetechTypes from './types/usetech'

const edgewareTypes = Object.values(edgewareDefinitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

const options = {
  edgeware: {
    types: {
      ...edgewareTypes,
      'voting::VoteType': 'VoteType',
      'voting::TallyType': 'TallyType',
      'voting::Tally': 'VotingTally',
      // chain-specific overrides
      Address: 'GenericAddress',
      Keys: 'SessionKeys4',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      ReferendumInfo: 'ReferendumInfoTo239',
      Weight: 'u32'
    },
    typesAlias: {
      voting: { Tally: "VotingTally" }
    }
  },
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
