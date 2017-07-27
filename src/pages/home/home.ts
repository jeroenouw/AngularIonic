import { Component } from '@angular/core';
import { AlertController , NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  goTo() {
    this.navCtrl.push(UsersPage);
  }

  showImpression() {
    let confirm = this.alertCtrl.create({
      title: 'First impression?',
      message: 'What is your first impression on this Angular Ionic app?',
      buttons: [
        {
          text: 'Very basic',
          handler: () => {
            console.log('Very basic clicked');
          }
        },
        {
          text: 'Looks well',
          handler: () => {
            console.log('Looks well clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
