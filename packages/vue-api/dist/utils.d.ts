import { RegistryTypes } from '@polkadot/types/types';
export declare type ApiExtension = {
    types?: RegistryTypes;
};
export declare type ApiExtensionMap = Record<string, ApiExtension>;
export declare const getApiOptions: (apiUrl: string) => any;
