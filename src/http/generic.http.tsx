abstract class HttpClient{
    private _baseUrl :string;
    private _apiKey : string;

   constructor(baseUrl: string, apiKey: string){
       this._baseUrl = baseUrl;
       this._apiKey = apiKey;
   }
   
   protected url(url: string, type:string): string {
       return `${this._baseUrl}${url}${this._apiKey}${type}`;
     }

   
}

export default HttpClient