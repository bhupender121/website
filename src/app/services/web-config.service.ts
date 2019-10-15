import { Injectable } from '@angular/core';
import { WebConfig } from '../common/web-config';

@Injectable({
  providedIn: 'root'
})
export class WebConfigService {
  config = WebConfig;
  constructor() { }
  getConfig() {
    return this.config;
  }
}
