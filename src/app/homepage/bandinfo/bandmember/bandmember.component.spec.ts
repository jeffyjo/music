import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandmemberComponent } from './bandmember.component';

describe('BandmembersComponent', () => {
  let component: BandmemberComponent;
  let fixture: ComponentFixture<BandmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
