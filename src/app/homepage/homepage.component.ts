import { Component, OnInit } from '@angular/core';
import { AlertService } from './../services/alert.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
  
})
export class HomepageComponent implements OnInit {
  active = 'inactive'
  constructor(private alertService: AlertService) { }

  ngOnInit(){
    //Username here
    this.success("success")
  }
  
  success(message: string) {
      this.alertService.success(message);
      setTimeout(() => {
        this.clear()
      }, 2000);
  }

  error(message: string) {
      this.alertService.error(message);
  }

  info(message: string) {
      this.alertService.info(message);
  }

  warn(message: string) {
      this.alertService.warn(message);
  }

  clear() {
      this.alertService.clear();
  }

  test(){
    this.active = (this.active === 'inactive' ? 'active' : 'inactive')
  }

}
