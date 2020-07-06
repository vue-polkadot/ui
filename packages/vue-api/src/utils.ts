import * as edgewareDefinitions from 'edgeware-node-types/interfaces/definitions';

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
  }
};

const regexes = {
  edgeware: /edgewa/
};

export const getApiOptions = (apiUrl: string): any => {
  if (apiUrl.match(regexes.edgeware)) {
    return { ...options.edgeware };
  }

  return {};
};
