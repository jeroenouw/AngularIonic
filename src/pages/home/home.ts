import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo() {
    this.navCtrl.push(UsersPage);
  }

}
