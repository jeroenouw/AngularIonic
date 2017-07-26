import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../../models/user.model';

@Injectable()
export class GithubUsersProvider {

  baseUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.baseUrl}/users`)
      .catch(this.handleError);
  }  

  getUserDetails(login: string): Observable<User> {
    return this.http
      .get(`${this.baseUrl}/users/${login}`)
      .catch(this.handleError);
  }
  
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
