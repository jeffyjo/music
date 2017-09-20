import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.scss']
})
export class HomepageHeaderComponent implements OnInit {
  userName = ''

  constructor() { }

  ngOnInit() {
    //get userName here
  }

}