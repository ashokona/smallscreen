import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {

  constructor(private http:Http,private jwtService: JwtService) { }
  
      private setHeaders(): Headers {
      const headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
  
      if (this.jwtService.getToken()) {
        headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
      }
      return new Headers(headersConfig);
    }
  
    private formatErrors(error: any) {
       return Observable.throw(error.json());
    }
  
    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
      return this.http.get(`${environment.api}${path}`, { headers: this.setHeaders(), search: params })
      .map((res: Response) => res.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
    }
  
    put(path: string, body: Object = {}): Observable<any> {
      return this.http.put(
        `${environment.api}${path}`,
        JSON.stringify(body),
        { headers: this.setHeaders() }
      )
      .map((res: Response) => res.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
    }
  
    post(path: string, body: Object = {}): Observable<any> {
      return this.http.post(
        `${environment.api}${path}`,
        JSON.stringify(body),
        { headers: this.setHeaders() }
      )
      .map((res: Response) => {
       return res.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
    }
  
    delete(path): Observable<any> {
      return this.http.delete(
        `${environment.api}${path}`,
        { headers: this.setHeaders() }
      )
      .map((res: Response) => res.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
    }

}
