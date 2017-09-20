import { element } from 'protractor';
import { Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { 
  CalendarModule, 
  CalendarEvent, 
  CalendarEventAction, 
  CalendarEventTimesChangedEvent 
} from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
  subDays,
  addDays,
  addHours
} from 'date-fns';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './../../services/firebase.service';
import 'fullcalendar';

import { EventsService } from './../../services/events.service';
import { DialogsService } from './../../services/confirm-dialog.service';
import { EditDialogsService } from './../../services/edit-dialog.service';

import { Colors } from './../../models/colors';
import { Event } from './../../models/event';

interface EventFromServer extends CalendarEvent{
  id: string
  eventDate: Date
  eventName: string
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarEventComponent implements OnInit {
  public date: Date = new Date(Date.now())

  view: string = 'month';
  viewDate: Date = new Date();

  events
  dataAvailable : boolean = false
  activeDayIsOpen : boolean = false

  addEvent = false
  addEventText = 'Add new event'
  
  private colors = new Colors

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  
  constructor(private es: EventsService, 
              private firebaseService: FirebaseService,
              private dialog: MdDialog,
              private dialogService: DialogsService,
              private editDialogService: EditDialogsService){
    
    this.events = []
  }

  ngOnInit(){
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
              color: item.color.colorHex,
              actions: this.actions
            }
            this.events.push(event)
          });
          this.dataAvailable = true
    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event : CalendarEvent<{event : Event}>) {
    console.log(event)
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action)
    if(action === 'Deleted'){
      this.openDeleteDialog(action, event)
    } else if (action === 'Edited') {
      this.openEditDialog(event)
    }

  }

  openEditDialog(event : CalendarEvent){
    this.editDialogService.edit(event).subscribe(res => {
      console.log(res)
    })
  }

  openDeleteDialog(action: string, event: CalendarEvent) {
    console.log({action, event})
    this.dialogService
      .confirm('Delete Event: ' + event.title, 'Are you sure you want to do this?')
      .subscribe(res => {
        if(res){
          this.es.deleteEvent(event)
        } else {
          return
        }
      })
  }

  addEventClicked(){
    if(this.addEvent){
      this.addEventText = 'Add new event'
      this.addEvent = false
    } else {
      this.addEventText = 'Cancel'
      this.addEvent = true
    }
  }

}
