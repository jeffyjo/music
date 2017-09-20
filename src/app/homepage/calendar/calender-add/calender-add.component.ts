import { FirebaseService } from './../../../services/firebase.service';
import { EventsService } from './../../../services/events.service';
import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Colors } from './../../../models/colors';

@Component({
  selector: 'app-calender-add',
  templateUrl: './calender-add.component.html',
  styleUrls: ['./calender-add.component.scss']
})
export class CalenderAddComponent implements OnInit {
  form
  model
  @Input('events') eventsList: FirebaseListObservable<any>
  colors

  constructor(
    private es: EventsService,
    private firebaseService: FirebaseService,
    private colorsSerivce: Colors) {
      this.colors = colorsSerivce.colors
  }

  ngOnInit() {
    // console.log(this.eventsList)
  }

  addEvent(f){
    let form = f.value
    let event = {
      id: this.makeID(),
      title : form.eventName,
      start : (form.startDate).toString(),
      end : (form.endDate).toString(),
      color : form.color
    }
    this.es.addEvent(event)
    f.reset()

  }

  makeID() {
    var text = "E";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 27; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  test(d){
    console.log(d)
  }

}
