import { detectPackage } from '@polkadot/util';

import keyring, { Keyring } from './Keyring';

// eslint-disable-next-line @typescript-eslint/no-var-requires
detectPackage(require('./package.json'), typeof __dirname !== 'undefined' && __dirname);

export default keyring;

export {
  Keyring,
};
