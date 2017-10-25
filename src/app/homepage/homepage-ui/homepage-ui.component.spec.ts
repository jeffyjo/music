import { HomepageComponent } from './../homepage.component';
import { HeaderIndexComponent } from './../../header-index/header-index.component';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HomepageUiComponent } from './homepage-ui.component';
import { appRoutes } from './../../app-routing.module';

import { EventsService } from './../../services/events.service';

// Router test
// https://angular.io/guide/testing#routed-component

class MockEventsService {

}

describe('HomepageUiComponent', () => {
  let component: HomepageUiComponent;
  let fixture: ComponentFixture<HomepageUiComponent>;

  let ocation : Location
  let router : Router

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageUiComponent, HeaderIndexComponent, HomepageComponent ],
      imports : [ RouterTestingModule.withRoutes(appRoutes) ],
      providers: [ { provide: EventsService, useClass: MockEventsService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router)
    location = TestBed.get(Location)
    router.initialNavigation()

    fixture = TestBed.createComponent(HomepageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be true', () => {
  //   expect(true).toBeTruthy()
  // })

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('navigate to "" redirects you to /home', fakeAsync(() => { 
  //   router.navigate(['']); 
  //   tick(); 
  //   expect(location.pathname).toBe('/home'); 
  // }));
});
