import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) { }

    /**
      * Post Request
      * 
      * @param json 
      * @param apiUrl 
      */
    post(apiUrl: string, json: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(`${environment.apiUrl}${apiUrl}`, json)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
      * Put Request
      * 
      * @param json 
      * @param apiUrl 
      */
     put(apiUrl: string, json: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.put(`${environment.apiUrl}${apiUrl}`, json)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
      * Get Request
      * 
      * @param apiUrl 
      */
    get(apiUrl: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(`${environment.apiUrl}${apiUrl}`)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
    * Delete Request
    * 
    * @param apiUrl 
    */
    delete(apiUrl: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.delete(`${environment.apiUrl}${apiUrl}`)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}