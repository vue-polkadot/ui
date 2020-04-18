import { ApiPromise } from '@polkadot/api';
export default class Api {
    get api(): any;
    static createInstance(defaultUrl?: string): Promise<ApiPromise | Error>;
    static getInstance(): Api;
    private static instance;
    private _api;
    private constructor();
    changeApiUrl(apiUrl: string): Promise<void>;
    private setApi;
    private createApi;
}
