import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Event } from '../../../models/event.model';
import { GithubEventsProvider } from '../../../providers/github-events/github-events';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  event: Event[];
  login: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geProvider: GithubEventsProvider) 
  {
    this.login = navParams.get('login');    
    this.geProvider.getEventDetails(this.login)
      .subscribe(
        events => { this.event = events; })
  }

}
