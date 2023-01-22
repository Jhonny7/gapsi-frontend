import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/**Clase provider que es básicamente un servicio generico para las peticiones a servicios */
@Injectable({
  providedIn: 'root',
})
export class GenericService {
  public user: any = null;
  constructor(private http: HttpClient) {}

  //**Method that makes GET requests */
  sendGetRequest(webservice_URL: string, clazz: any = null) {
    let observable: any = this.http.get(webservice_URL);

    if (clazz) {
      return observable.pipe(
        map((data: any) => {
          let arr: any = data;

          let obj: any = null;
          if (!Array.isArray(arr)) {
            obj = clazz.fromJson(arr);
          } else {
            obj = arr.map((item) => clazz.fromJson(item));
          }
          return obj;
        })
      );
    } else {
      return observable;
    }
  }

  //**Method that makes GET requests WITH PARAMS*/
  sendGetRequestParams(webservice_URL: string, params: any) {
    //return this.http.get(webservice_URL, params).timeout(TIME_OUT);
    return this.http.get(webservice_URL, params);
  }

  //**Method that makes GET requests */
  sendGetParams(webservice_URL: string, params: any) {
    //return this.http.get(webservice_URL, params).timeout(TIME_OUT);
    let options: any = {};
    options.params = params;
    return this.http.get(webservice_URL, options);
  }

  //**Method that makes POST requests WITH PARAMS */
  sendPostRequestParams(webservice_URL: string, params: any, httpOptions: any) {
    //return this.http.post(webservice_URL, params, httpOptions).timeout(TIME_OUT);
    return this.http.post(webservice_URL, params, httpOptions);
  }

  //**Method that makes POST requests */
  sendPostRequest(webservice_URL: string, request: {}) {
    //return this.http.post(webservice_URL, request).timeout(TIME_OUT);
    return this.http.post(webservice_URL, request);
  }

  //**Method that makes PUT requests */
  sendPutRequest(webservice_URL: string, request: {} = {}) {
    //return this.http.post(webservice_URL, request).timeout(TIME_OUT);
    return this.http.put(webservice_URL, request);
  }

  /**Method that makes DELETE requests */
  sendDeleteRequest(webservice_URL: string) {
    //return this.http.delete(webservice_URL).timeout(TIME_OUT);
    return this.http.delete(webservice_URL);
  }

  /**Method that makes DELETE requests */
  sendDelete(webservice_URL: string) {
    //return this.http.delete(webservice_URL).timeout(TIME_OUT);
    return this.http.delete(webservice_URL);
  }
}
