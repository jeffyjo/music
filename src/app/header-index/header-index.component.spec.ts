import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from './../services/firebase.service';
import { FirebaseApp } from 'angularfire2';
import { 
  async, 
  ComponentFixture, 
  TestBed,
  tick,
  fakeAsync 
} from '@angular/core/testing';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';  
import { FormsModule } from '@angular/forms';

import { HeaderIndexComponent } from './header-index.component';
import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { GearListComponent } from './../homepage/gear-list/gear-list.component';
import { CalendarComponent } from './../homepage/calendar/calendar.component';
import { HomepageComponent } from './../homepage/homepage.component';
import { HomepageHeaderComponent } from './../homepage/homepage-header/homepage-header.component';
import { HeaderIndexFormComponent } from './header-index-form/header-index-form.component';

import { appRoutes } from './../app.module';

describe('HeaderIndexComponent', () => {
  let component: HeaderIndexComponent;
  let fixture: ComponentFixture<HeaderIndexComponent>;
  let router, location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule.withRoutes(appRoutes)],
      declarations: [ 
        HeaderIndexComponent, 
        HomepageComponent, 
        CalendarComponent, 
        GearListComponent,
        HeaderTabsComponent,
        HomepageHeaderComponent,
        HeaderIndexFormComponent
      ], 
      providers: [
        FirebaseService,
        AngularFireAuth,
        FirebaseApp
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(HeaderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  // it('should navigate to "index-home" takes to index' ,fakeAsync( () => {
  //   router.navigate(['']);
  //   tick(50);
  //   expect(location.path()).toBe('/');
  // }));

  // it('should navigate to "homepage takes you to homepage', fakeAsync( () => {
  //   router.navigate(['/homepage']);
  //   tick(50);
  //   expect(location.path()).toBe('/homepage')
  // }));

});
