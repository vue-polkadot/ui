import { detectPackage } from '@polkadot/util';

import keyring, { Keyring } from './Keyring';

// eslint-disable-next-line no-useless-catch
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  detectPackage(require('../package.json'), __dirname);
} catch (error) {
  throw error;
}

export default keyring;

export {
  Keyring,
};
