import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';
import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private guProvider: GithubUsersProvider) 
  {
    this.guProvider.getUsers()
      .subscribe(
        users => { this.users = users; })
  }
  
  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

}
