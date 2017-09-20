import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderAddComponent } from './calender-add.component';

describe('CalenderAddComponent', () => {
  let component: CalenderAddComponent;
  let fixture: ComponentFixture<CalenderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
