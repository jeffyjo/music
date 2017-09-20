import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GearListComponent } from './homepage/gear-list/gear-list.component';
import { CalendarComponent } from './homepage/calendar/calendar.component';
import { HeaderIndexComponent } from './header-index/header-index.component';

const appRoutes : Routes = [
  { path : "", component : HeaderIndexComponent },
  { path : "homepage", component : HomepageComponent,
    children : [
      { path : "calendar", component : CalendarComponent },
      { path : "gearlist", component : GearListComponent }
  ] }
]

describe('AppComponent', () => {
  let location : Location;
  let router : Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
