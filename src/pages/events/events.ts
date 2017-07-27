import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GithubEventsProvider } from '../../providers/github-events/github-events';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geProvider: GithubEventsProvider) 
  {
    this.geProvider.getEvents()
      .subscribe(events => { 
        this.events = events;  
      })
  }

}
