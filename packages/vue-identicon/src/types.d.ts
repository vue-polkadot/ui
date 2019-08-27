import { Prefix } from '@polkadot/util-crypto/address/types';
export interface BaseProps {
    className?: string;
    style?: Record<string, string | number>;
}
export interface Props extends BaseProps {
    address: string;
    publicKey: string;
    size: number;
}
export interface IdentityProps extends BaseProps {
    isHighlight?: boolean;
    onCopy?: (value: string) => void;
    prefix?: Prefix;
    size?: number;
    theme?: 'beachball' | 'empty' | 'jdenticon' | 'polkadot' | 'substrate';
    value?: string | Uint8Array | null;
}
export interface IconProperties {
    address: string;
    publicKey: string;
}
