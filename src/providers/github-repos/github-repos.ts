import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

@Injectable()
export class GithubReposProvider {

  baseUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {
  }
  
  getRepos(): Observable<any[]> {
    return this.http
      .get(`${this.baseUrl}/repos/jeroenouw/angularionic`)
      .catch(this.handleError);
  }  

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
