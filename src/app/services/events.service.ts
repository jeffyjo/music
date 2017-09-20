import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventsService {
  events
  refresh: Subject<any> = new Subject();

  constructor(private firebaseService: FirebaseService, private http: Http) { 
    this.events = this.firebaseService.af.list('/events')
  }

  getEvents(){
    return this.events
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
