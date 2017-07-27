import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../../models/user.model';
import { GithubUsersProvider } from '../../../providers/github-users/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private guProvider: GithubUsersProvider) 
  {
    this.login = navParams.get('login');    
    this.guProvider.getUserDetails(this.login)
      .subscribe(
        users => { this.user = users; })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
