import { Component, OnInit } from '@angular/core';
import { ClickOutsideDirective } from '../../../shared/clickOutside.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards = [
    { title: "guitar", description: "something" },
    { title: "guitar", description: "something" },
    { title: "guitar", description: "something" }
  ]


  constructor() { }

  ngOnInit() {
  }

  close(){
    console.log("I'm out")
  }

}
