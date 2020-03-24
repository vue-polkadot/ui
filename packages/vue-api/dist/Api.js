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
export default class Api {
    constructor() {
    }
    get api() {
        return this._api;
    }
    static createInstance(defaultUrl = 'wss://substrate-rpc.parity.io/') {
        return __awaiter(this, void 0, void 0, function* () {
            Api.getInstance();
            const provider = new WsProvider(defaultUrl);
            const options = getApiOptions(defaultUrl);
            this.instance.setApi(yield ApiPromise.create(Object.assign({ provider }, options)));
            Api.eventEmitter.emit('created');
        });
    }
    static getInstance() {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }
    changeApiUrl(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            this._api && this._api.disconnect();
            // Api.instance.setApi(await this.createApi(apiUrl));
            this.setApi(yield this.createApi(apiUrl));
        });
    }
    setApi(api) {
        this._api = api;
    }
    createApi(apiUrl = 'wss://poc3-rpc.polkadot.io/') {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = new WsProvider(apiUrl);
            const options = getApiOptions(apiUrl);
            return yield ApiPromise.create(Object.assign({ provider }, options));
        });
    }
}
Api.eventEmitter = new EventEmitter();
