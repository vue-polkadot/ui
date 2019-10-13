import { ApiPromise, WsProvider } from '@polkadot/api';

export default class Api {
  get api(): any {
    return this._api;
  }

  public static async createInstance() {
    Api.getInstance();
    const defaultUrl = 'wss://poc3-rpc.polkadot.io/';
    const provider = new WsProvider(defaultUrl);
    this.instance.setApi(await ApiPromise.create({provider}));
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

  private constructor() {
  }

  public async changeApiUrl(apiUrl: string): Promise<void> {
    this._api && this.disconnect();
    this.setApi(this.createApi(apiUrl));
  }

  private setApi(api: any) {
    this._api = api;
  }

  private disconnect() {
    this._api.disconnect();
  }

  private async createApi(
    apiUrl: string = 'wss://poc3-rpc.polkadot.io/'
  ): Promise<any> {
    const provider = new WsProvider(apiUrl);
    return await ApiPromise.create({provider});
  }
}
