import { IconProperties } from './types';
import { isHex, isU8a, u8aToHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import { Prefix } from '@polkadot/util-crypto/address/types';

export const calculateAddressAndPublicKey = (value: string, prefix?: Prefix ): IconProperties  => {
  try {
    const address = isU8a(value) || isHex(value)
      ? encodeAddress(value, prefix)
      : (value || '');
    const publicKey = u8aToHex(decodeAddress(address, false, prefix));

    return {
        address,
        publicKey,
      };
  } catch (error) {
    return {
      address: '',
      publicKey: '0x',
    };
  }

};
