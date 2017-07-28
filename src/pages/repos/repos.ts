import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GithubReposProvider } from '../../providers/github-repos/github-repos';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {
  repos: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private grProvider: GithubReposProvider) 
  {
    this.grProvider.getRepos()
      .subscribe(repos => { 
        this.repos = repos;  
      })
  }

}
