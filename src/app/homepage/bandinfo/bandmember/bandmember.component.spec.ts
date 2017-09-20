import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandmembersComponent } from './bandmembers.component';

describe('BandmembersComponent', () => {
  let component: BandmembersComponent;
  let fixture: ComponentFixture<BandmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
