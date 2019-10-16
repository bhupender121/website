import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from './api-response';
import { CookieService } from 'ngx-cookie-service';
import { WebConfigService } from '../services/web-config.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  httpOptions= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      .append("source", "PWA")
      .append("businessid", "74")
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', '*')
      .append('Access-Control-Allow-Origin', '*')
  };
  constructor(private httpClient: HttpClient, private _cookieService: CookieService, private config: WebConfigService) { }
   
  getAPIData(apiController, apiAction, type, queryString, obj, headers) {
    if (type == 1) {
      return this.httpClient.get((this.config.getConfig().PrivateAPIDomain + apiController + "/" + apiAction + queryString), this.httpOptions);
    } else {
      return this.httpClient.post((this.config.getConfig().PrivateAPIDomain + apiController + "/" + apiAction), obj, this.httpOptions);
    }
  }
  public getCookieService(key) {
    debugger;
    return this._cookieService.get(key);
  }
  public setCookieService(key,_value,days) {
    return this._cookieService.set(key, _value,days,'/',);
  }
  public static getCookieOld(name: string) {
    debugger;
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
}
