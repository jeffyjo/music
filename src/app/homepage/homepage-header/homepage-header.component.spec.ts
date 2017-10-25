import { AddListComponent } from './../gear-list/add-list/add-list.component';
import { EventComponent } from './../event/event.component';
import { BandinfoComponent } from './../bandinfo/bandinfo.component';
import { HomepageUiComponent } from './../homepage-ui/homepage-ui.component';
import { 
  async, 
  ComponentFixture, 
  TestBed, 
  inject, 
  fakeAsync, 
  tick 
} from '@angular/core/testing';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';  
import { FormsModule } from '@angular/forms';

import { HomepageHeaderComponent } from './homepage-header.component';
import { CalendarEventComponent } from './../calendar/calendar.component';
import { CalenderAddComponent } from './../calendar/calender-add/calender-add.component';
import { GearListComponent } from './../gear-list/gear-list.component';
import { appRoutes } from './../../app-routing.module';
import { HeaderIndexComponent } from './../../header-index/header-index.component';
import { HomepageComponent } from './../homepage.component';
import { HeaderTabsComponent } from './../../header-index/header-tabs/header-tabs.component';
import { HeaderIndexFormComponent } from './../../header-index/header-index-form/header-index-form.component';

describe('HomepageHeaderComponent', () => {
  let component: HomepageHeaderComponent;
  let fixture: ComponentFixture<HomepageHeaderComponent>;
  let router, location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(appRoutes)
      ],
      declarations: [ 
        HomepageHeaderComponent, 
        GearListComponent, 
        CalendarEventComponent, 
        HeaderIndexComponent,
        HomepageComponent,
        HeaderTabsComponent,
        HeaderIndexFormComponent,
        HomepageUiComponent,
        BandinfoComponent,
        EventComponent,
        AddListComponent,
        CalenderAddComponent
      ]
          // [
        // { path: "gearlist", component: GearListComponent },
        // { path: "calendar", component: CalendarComponent }
      // ])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    
    fixture = TestBed.createComponent(HomepageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('fakeAsync works', fakeAsync(() => {
  //   let promise = new Promise((resolve) => {
  //     setTimeout(resolve, 10)
  //   });
  //   let done = false;
  //   promise.then(() => done = true);
  //   tick(50);
  //   expect(done).toBeTruthy();
  // }));

  // it('navigate to "homepage" takes you to homepage', fakeAsync( () => {
  //   router.navigate(['/homepage']);
  //   tick(50);
  //   expect(location.path()).toBe('/homepage');
  // }));

  // it('navigate to "gearlist" takes you to gearlist', fakeAsync(() => {
  //   router.navigate(['/homepage/gearlist']);
  //   tick(50);
  //   expect(location.path()).toBe('/homepage/gearlist');
  // }));
  
  // it('should navigate to "calendar takes you to calendar', fakeAsync( () => {
  //   router.navigate(['/homepage/calendar']);
  //   tick(50);
  //   expect(location.path()).toBe('/homepage/calendar');
  // }));

});
