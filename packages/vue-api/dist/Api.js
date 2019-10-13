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
export default class Api {
    constructor() {
    }
    get api() {
        return this._api;
    }
    static createInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            Api.getInstance();
            const defaultUrl = 'wss://poc3-rpc.polkadot.io/';
            const provider = new WsProvider(defaultUrl);
            this.instance.setApi(yield ApiPromise.create({ provider }));
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
            this._api && this.disconnect();
            this.setApi(this.createApi(apiUrl));
        });
    }
    setApi(api) {
        this._api = api;
    }
    disconnect() {
        this._api.disconnect();
    }
    createApi(apiUrl = 'wss://poc3-rpc.polkadot.io/') {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = new WsProvider(apiUrl);
            return yield ApiPromise.create({ provider });
        });
    }
}
