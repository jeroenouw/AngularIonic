import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

@Injectable()
export class GithubEventsProvider {

  baseUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {
  }

  getEvents(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/events`)
      .catch(this.handleError);
  }  

  getEventDetails(login: any): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/users/${login}/events`)
      .catch(this.handleError);
  }
    
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }  
}