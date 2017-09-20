import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from './../../app.module';
import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, ConnectionBackend, RequestOptions, RequestMethod } from '@angular/http';
import { GearListService } from './../../services/gearList.service';
import { FirebaseService } from './../../services/firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { GearListComponent } from './gear-list.component';

// Test
class AngularFireMocks extends AngularFireAuth {
  public login(){

  }

  public logout(){
      
  }

}

class AngularDBMock extends AngularFireDatabase {

}

// AngularFireMocks.auth.and.returnValue(Observable.of({uid: 'ABC123'}));

describe('GearListComponent', () => {
  let component: GearListComponent;
  let fixture: ComponentFixture<GearListComponent>;
  let options: RequestOptions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig) ],
      declarations: [ GearListComponent ],
      providers: [ 
        Http,
        ConnectionBackend,
        // RequestOptions, 
        GearListService, 
        FirebaseService, 
          { 
            provide: AngularFireAuth, 
            useValue: AngularFireMocks 
          }, { 
            provide: AngularFireDatabase,
            useValue: AngularDBMock
          }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearListComponent);
    component = fixture.componentInstance;
    // options = new RequestOptions({ method: RequestMethod.Post });
    fixture.detectChanges();
  });

  // it('should be created', () => {
  // //   // expect(component).toBeTruthy();
  //   expect(true).toBeTruthy();
  // });
});
