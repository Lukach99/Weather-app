abstract class HttpClient{
    private _baseUrl :string;
    private _apiKey : string;

   constructor(baseUrl: string, apiKey: string){
       this._baseUrl = baseUrl;
       this._apiKey = apiKey;
   }
   
   protected url(url: string): string {
       return `${this._baseUrl}${url}`;
     }

   
}

export default HttpClient