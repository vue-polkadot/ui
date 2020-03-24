import * as edgewareDefinitions from "edgeware-node-types/dist/definitions";

const edgewareTypes = Object.values(edgewareDefinitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

const options = {
  edgeware: {
    types: {
      ...edgewareTypes,
      "voting::VoteType": "VoteType",
      "voting::TallyType": "TallyType"
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
