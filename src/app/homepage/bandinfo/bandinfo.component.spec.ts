import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandinfoComponent } from './bandinfo.component';

describe('BandinfoComponent', () => {
  let component: BandinfoComponent;
  let fixture: ComponentFixture<BandinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
