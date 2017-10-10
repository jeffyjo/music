import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from './../../services/events.service';
import { Event } from './../../models/event';

@Component({
  selector: 'app-homepage-ui',
  templateUrl: './homepage-ui.component.html',
  styleUrls: ['./homepage-ui.component.scss']
})
export class HomepageUiComponent implements OnInit {
  events
  dataAvailable = false

  constructor(private es: EventsService,
              private router: Router
  
  ) { }

  ngOnInit() {
    this.events = []
    this.loadEvents()
  }

  loadEvents(){
    this.es.getEvents().subscribe(res => {
      this.events = []
      res.forEach((item: Event) => {
            let event = {
              $key: item.$key,
              id: item.id,
              start: new Date(item.start),
              end: new Date(item.end),
              title: item.title,
              color: item.color.colorHex
            }
            this.events.push(event)
        });
        this.dataAvailable = true
    })
  }

  goToEvent(e){
    // this.es.event.next(e)
    this.router.navigate(['events', e.$key])
  }

}
