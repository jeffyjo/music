import { FirebaseService } from './services/firebase.service';
import { GearListService } from './services/gearList.service';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {}

}
