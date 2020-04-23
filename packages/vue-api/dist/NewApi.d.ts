/// <reference types="node" />
import { ApiPromise } from '@polkadot/api';
import { EventEmitter } from 'events';
export interface ApiService {
    connect(apiUrl: string): Promise<ApiPromise | Error>;
    disconnect(): void;
}
/**
 * Singleton instance for @polkadot/api.
 */
export default class Api extends EventEmitter implements ApiService {
    private static _instance;
    private _api;
    private _apiUrl;
    /**
     * getInstance
     * @returns Api Instance
     */
    static getInstance(): Api;
    private constructor();
    /**
     * connect
     * @requires apiUrl: string
     * @returns instance of polkadot-js/api instance
     */
    connect(apiUrl: string): Promise<ApiPromise | Error>;
    /**
     * disconnect
     */
    disconnect(): void;
    private setApi;
    private setUrl;
    get api(): ApiPromise;
    /**
     * tryEmit
     *
     */
    _emit(message?: string, payload?: any): void;
}
