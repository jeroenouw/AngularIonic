import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GithubOrgsProvider } from '../../providers/github-orgs/github-orgs';

@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html',
})
export class OrganisationsPage {
  orgs: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private goProvider: GithubOrgsProvider) 
  {
    this.goProvider.getOrgs()
      .subscribe(orgs => { 
        this.orgs = orgs;  
      })
  }

}
