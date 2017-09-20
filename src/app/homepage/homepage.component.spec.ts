import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomepageComponent } from './homepage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
// import { GearListComponent } from './gear-list/gear-list.component';
// import { CalendarComponent } from './calendar/calendar.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomepageComponent, 
        HomepageHeaderComponent, 
        // GearListComponent, 
        // CalendarComponent 
      ],
      imports: [RouterTestingModule.withRoutes([
        // { path: "gearlist", component: GearListComponent },
        // { path: "calendar", component: CalendarComponent }
      ])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
