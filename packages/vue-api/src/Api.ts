import { ApiPromise, WsProvider } from '@polkadot/api';
import { EventEmitter } from 'events';
import { ApiExtension, getApiOptions } from './utils'

export interface ApiService {
  connect(apiUrl: string, overrideOptions?: ApiExtension): Promise<ApiPromise | Error>;
  // registerCustomTypes(userTypes: string, apiUrl?: string): Promise<ApiPromise | Error>;
}

/**
 * Singleton instance for @polkadot/api.
 */
export default class Api extends EventEmitter implements ApiService {
  private static _instance: Api = new Api();
  private _api: ApiPromise;
  private _apiUrl: string;

  /**
   * getInstance
   * @returns Api Instance
   */
  public static getInstance(): Api {
    return Api._instance;
  }

  private constructor() {
    super()
  }

  /**
   * connect
   * @requires apiUrl: string
   * @returns instance of polkadot-js/api instance
   */
  public async connect(apiUrl: string, overrideOptions?: ApiExtension): Promise<ApiPromise | Error> {
    if (!apiUrl || typeof apiUrl != 'string') {
      throw new TypeError(`[VUE API] ERR: Unable to init api with apiUrl ${apiUrl}`);
    }

    try {
      await this.disconnect(); // disconnect if already connected
      const provider = new WsProvider(apiUrl);
      const options = overrideOptions ?? getApiOptions(apiUrl);
      const apiPromise = await ApiPromise.create({provider, ...options});
      apiPromise
      .once('connected', () => this._emit('connected', apiUrl))
      .once('ready', () => this._emit('ready', apiUrl))
      .on('disconnected', () => this._emit('disconnected', apiUrl));
      this.setApi(apiPromise);
      this._emit('connect', apiPromise);
    } catch (err) {
      this._emit('error', err);
      throw err;
    }

    this.setUrl(apiUrl);
    return this._api;
  }

  /**
   * disconnect
   */
  public async disconnect(): Promise<void> {
    if (this._api) {
      // const url = this._apiUrl;
      // this._api.once('disconnected', () => console.log('[DOT-API] Disconnected from the endpoint', url));
      await this._api.disconnect();
      this.setUrl(null);
    }
  }

  private setApi(api: ApiPromise) {
    this._api = api;
  }

  private setUrl(apiUrl: string) {
    this._apiUrl = apiUrl;
  }

  get api() {
    return this._api;
  }

  /**
   * tryEmit
   *
   */
  public _emit(message: string = 'event', payload?: any) {
    this.emit(message, payload)
  }

}
