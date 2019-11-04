import { ApiPromise, WsProvider } from '@polkadot/api';
import * as EventEmitter from 'events';

export default class Api {
  get api(): any {
    return this._api;
  }

  public static async createInstance(defaultUrl = 'wss://poc3-rpc.polkadot.io/') {
    Api.getInstance();
    const provider = new WsProvider(defaultUrl);
    this.instance.setApi(await ApiPromise.create({provider}));
    Api.eventEmitter.emit('created');
  }

  public static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  private static instance: Api;
  // private _provider: any;
  private _api: any;
  public static eventEmitter: EventEmitter = new EventEmitter();

  private constructor() {
  }

  public async changeApiUrl(apiUrl: string): Promise<void> {
    this._api && this._api.disconnect();
    // Api.instance.setApi(await this.createApi(apiUrl));
    this.setApi(await this.createApi(apiUrl));
  }

  private setApi(api: any) {
    this._api = api;
  }

  private async createApi(
    apiUrl: string = 'wss://poc3-rpc.polkadot.io/'
  ): Promise<any> {
    const provider = new WsProvider(apiUrl);
    return await ApiPromise.create({provider});
  }
}
