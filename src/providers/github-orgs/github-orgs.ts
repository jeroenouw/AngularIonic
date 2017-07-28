import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

@Injectable()
export class GithubOrgsProvider {
  headers: HttpHeaders;  
  header: any;

  baseUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({ 'Content-Type': 'application/vnd.github.v3+json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.header = ({ headers: this.headers });
  }
  
  getOrgs(): Observable<any[]> {
    return this.http
      .get(`${this.baseUrl}/organizations`, this.header)
      .catch(this.handleError);
  }  

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}