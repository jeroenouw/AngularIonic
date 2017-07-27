import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Event } from '../../models/event.model';
import { GithubEventsProvider } from '../../providers/github-events/github-events';
import { EventDetailsPage } from './event-details/event-details';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: Event[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geProvider: GithubEventsProvider) 
  {
    this.geProvider.getEvents()
      .subscribe(events => { 
        this.events = events;  
      })
  }
      
  goToDetails(login: string) {
    this.navCtrl.push(EventDetailsPage, {login});
  }

}
