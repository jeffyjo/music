import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';
import { Event } from './../models/event';


@Injectable()
export class EventsService {
  events
  refresh: Subject<any> = new Subject();
  event: Subject<Event> = new Subject()

  constructor(private firebaseService: FirebaseService, private http: Http) { 
    this.events = this.firebaseService.af.list('/events')
  }

  getEvents(){
    return this.events
  }

  getEvent(eventKey){
    let event
    this.events.forEach(item => {
      item.map( (ev) => {
        if(eventKey == ev.$key){
          event = ev
        }
      })
    });
    return event

    // return this.event;

    // this.event.subscribe(ee => {
    //   console.log(ee)
    // })
    // this.events.forEach(e => {
    //   e.map( (ev : Event) => {
    //     if(eventKey === ev.$key){
    //       console.log(ev)
    //     }
    //   })
    // });


  }

  addEvent(event){
    return this.events.push(event)
    
  }

  deleteEvent(event){
    return this.events.remove(event.$key)
  }

  updateEvent(eventKey, event){
    return this.events.update(eventKey, event)
  }



}
