import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

import { 
    async, 
    ComponentFixture, 
    TestBed, 
    inject, 
    fakeAsync, 
    tick 
} from '@angular/core/testing';

class AngularFireAuthMock extends AngularFireAuth {
    public login(){}
    public logout(){}
}

class AngularFireAuthModuleMock extends AngularFireAuthModule {
    public auth: AngularFireAuthMock;
}


import { FirebaseService } from './firebase.service';

    let MockFirebase = require('mockFirebase').MockFirebase

  describe('Service: firebaseService', () => {
    let firebaseService: FirebaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ { 
                provide: AngularFireAuthModule, 
                useClass: AngularFireAuthModuleMock 
            } ]
        });
    });

    it('should be true', () => {
        expect(true).toBeTruthy();
    });
    
  });