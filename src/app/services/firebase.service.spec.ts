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

import { FirebaseService } from './firebase.service';

  describe('Service: firebaseService', () => {
    let firebaseService: FirebaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
        });
    });

    it('should be true', () => {
        expect(true).toBeTruthy();
    });
    
  });