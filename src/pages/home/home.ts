import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slides = [
    {
      title: "Angular Ionic mobile application",
      description: "This is a simple app with <b>REST API</b> and <b>observables</b> to get information from the <b>Github API</b>.",
      image: "assets/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/ica-slidebox-img-2.png",
    },
    {
      title: "What is Angular?",
      description: "<b>Angular</b> is a framework for building client applications in HTML and TypeScript that compiles to JavaScript.",
      image: "assets/ica-slidebox-img-3.png",
    }
  ];

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams) {
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
