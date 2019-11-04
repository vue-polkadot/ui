/// <reference types="node" />
import * as EventEmitter from 'events';
export default class Api {
    readonly api: any;
    static createInstance(): Promise<void>;
    static getInstance(): Api;
    private static instance;
    private _api;
    static eventEmitter: EventEmitter;
    private constructor();
    changeApiUrl(apiUrl: string): Promise<void>;
    private setApi;
    private createApi;
}
