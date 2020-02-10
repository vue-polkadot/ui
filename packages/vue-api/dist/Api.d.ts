/// <reference types="node" />
import { EventEmitter } from 'events';
export default class Api {
    get api(): any;
    static createInstance(defaultUrl?: string): Promise<void>;
    static getInstance(): Api;
    private static instance;
    private _api;
    static eventEmitter: EventEmitter;
    private constructor();
    changeApiUrl(apiUrl: string): Promise<void>;
    private setApi;
    private createApi;
}
