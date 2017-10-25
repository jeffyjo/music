import { HomepageComponent } from './../../homepage/homepage.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { by } from 'protractor';

import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './../../app.component';
import { HeaderIndexFormComponent } from './header-index-form.component';

import { FirebaseService } from './../../services/firebase.service';

// https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/

// describe('Component login', () => {
//   let component: HeaderIndexFormComponent;
//   let fixture: ComponentFixture<HeaderIndexFormComponent>;
//   let afAuth;
//   let Mockfirebase = require('mockfirebase').Mockfirebase;
  
  
//   beforeEach(async() => {
//     TestBed.configureTestingModule({
//       declarations: [HeaderIndexFormComponent],
//       imports: [ReactiveFormsModule, FormsModule, RouterModule],
//       providers: [FirebaseService, AngularFireAuth, FirebaseApp]
//     })
//       .compileComponents();
//   });

//   beforeEach( () => {
//     // create component and test fixture
//     fixture = TestBed.createComponent(HeaderIndexFormComponent);
    
//     // get test component from the fixture
//     component = fixture.componentInstance;


//   })

  // it('should be false', () => {
  //   expect(true).toBeTruthy();
  // })

// });
