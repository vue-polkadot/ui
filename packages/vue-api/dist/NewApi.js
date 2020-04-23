var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiPromise, WsProvider } from '@polkadot/api';
import { EventEmitter } from 'events';
import { getApiOptions } from './utils';
/**
 * Singleton instance for @polkadot/api.
 */
export default class Api extends EventEmitter {
    constructor() {
        super();
    }
    /**
     * getInstance
     * @returns Api Instance
     */
    static getInstance() {
        return Api._instance;
    }
    /**
     * connect
     * @requires apiUrl: string
     * @returns instance of polkadot-js/api instance
     */
    connect(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!apiUrl || typeof apiUrl != 'string') {
                throw new TypeError(`[VUE API] ERR: Unable to init api with apiUrl ${apiUrl}`);
            }
            try {
                const provider = new WsProvider(apiUrl);
                const options = getApiOptions(apiUrl);
                const apiPromise = yield ApiPromise.create(Object.assign({ provider }, options));
                this.setApi(apiPromise);
                this._emit('connect', apiPromise);
            }
            catch (err) {
                this._emit('error', err);
                throw err;
            }
            this.setUrl(apiUrl);
            return this._api;
        });
    }
    /**
     * disconnect
     */
    disconnect() {
        if (this._api) {
            // this._api.once('disconnected', () => this._emit('disconnect', this._apiUrl));
            this._api.disconnect();
            this.setUrl(null);
        }
    }
    setApi(api) {
        this._api = api;
    }
    setUrl(apiUrl) {
        this._apiUrl = apiUrl;
    }
    get api() {
        return this._api;
    }
    /**
     * tryEmit
     *
     */
    _emit(message = 'event', payload) {
        this.emit(message, payload);
    }
}
Api._instance = new Api();
