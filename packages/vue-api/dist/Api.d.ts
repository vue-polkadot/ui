export default class Api {
    readonly api: any;
    static createInstance(): Promise<void>;
    static getInstance(): Api;
    private static instance;
    private _api;
    private constructor();
    changeApiUrl(apiUrl: string): Promise<void>;
    private setApi;
    private disconnect;
    private createApi;
}
