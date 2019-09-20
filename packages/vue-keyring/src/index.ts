import { assertSingletonPackage } from '@polkadot/util';

import keyring, { Keyring } from './Keyring';

assertSingletonPackage('@polkadot/ui-keyring');

export default keyring;

export {
  Keyring,
};
