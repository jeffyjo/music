import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageUiComponent } from './homepage-ui.component';

describe('HomepageUiComponent', () => {
  let component: HomepageUiComponent;
  let fixture: ComponentFixture<HomepageUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
