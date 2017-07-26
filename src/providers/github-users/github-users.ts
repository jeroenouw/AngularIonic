import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubUsersProvider {

  baseUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {
    console.log('Hello GithubUsersProvider Provider');
  }

}
