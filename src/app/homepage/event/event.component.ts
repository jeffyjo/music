import { GearListsService } from './../../services/gear-lists.service';
import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Event } from './../../models/event';
import { EventsService } from './../../services/events.service';
import { Colors } from './../../models/colors';
import { List } from './../../models/list';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  event : Event
  gearList = []
  list
  listReady = false
  eventForm
  eventAvailable = false
  colorUpdated = false
  private colorArray = new Colors
  colors = this.colorArray.colors

  constructor(private route: ActivatedRoute,
              private router: Router,
              private es: EventsService,
              private gearlistsService: GearListsService
  ) { 
    this.event = {
      $key : null,
      id : null,
      title : '',
      start : null,
      end : null,
      color : null
    } 

    this.gearlistsService.getFullList().subscribe(lists => {
      lists.map((list : List) => {
        if(list.primary){
          this.listReady = true
          this.gearList.unshift(list)
          // this.gearList = list.gear
          this.listPressed(list)
        } else {
          this.gearList.push(list)
        }
      })
    })
  }

  // Change gearlist when select is changed
  listPressed(list){
    this.list = list
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let event : Event = this.es.getEvent(params.id)
      if(event){
        this.event = {
          $key : event.$key,
          id : event.id,
          title : event.title,
          start : new Date(event.start),
          end : new Date(event.end),
          color : event.color
        }
      } else {
        this.router.navigate(['/'])
      }
    })
    
    // this.es.getEvent()
    // this.loadEvent();
    this.eventAvailable = true
    console.log(this.event)
    console.log(this.eventAvailable)
  }

  loadEvent(){
    this.es.event.subscribe(ev => {
      this.event = ev
      console.log(this.event.title)
    })
  }

  ngOnDestroy(){
    // this.es.event.unsubscribe()
  }

  updated(updated : boolean){
    console.log(updated)
    if(this.event.color === this.event.color){
        this.colorUpdated = true
    }
}

}
