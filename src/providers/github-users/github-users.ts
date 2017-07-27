import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

import { User } from '../../models/user.model';

@Injectable()
export class GithubUsersProvider {
  headers: HttpHeaders;  
  header: any;

  baseUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({ 'Content-Type': 'application/vnd.github.v3+json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.header = ({ headers: this.headers });
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}/users`, this.header)
      .catch(this.handleError);
  }  

  getUserDetails(login: string): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}/users/${login}`, this.header)
      .catch(this.handleError);
  }

  searchUsers(searchParam: string): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}/search/users?q=${searchParam}`, this.header)
      .catch(this.handleError);
  }
  
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
