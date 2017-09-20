import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar'; 
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdSelectModule, 
  MdDatepickerModule, 
  MdNativeDateModule, 
  MdDialog, 
  MdDialogRef, 
  MD_DIALOG_DATA,
  MdDialogModule,
  MdButtonModule,
  MdSnackBarModule
} from '@angular/material';

// Firebase Setup
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { AppComponent } from './app.component';
import { HeaderIndexComponent } from './header-index/header-index.component';
import { HeaderIndexFormComponent } from './header-index/header-index-form/header-index-form.component';
import { HeaderTabsComponent } from './header-index/header-tabs/header-tabs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeaderComponent } from './homepage/homepage-header/homepage-header.component';
import { GearListComponent } from './homepage/gear-list/gear-list.component';
import { CalendarEventComponent } from './homepage/calendar/calendar.component';
import { CalenderAddComponent } from './homepage/calendar/calender-add/calender-add.component';
import { HomepageUiComponent } from './homepage/homepage-ui/homepage-ui.component';
import { BandinfoComponent } from './homepage/bandinfo/bandinfo.component';
import { BandmemberComponent } from './homepage/bandinfo/bandmember/bandmember.component';

// Services && Overall Components
import { FirebaseService } from './services/firebase.service';
import { GearListService } from './services/gearList.service';
import { EventsService } from './services/events.service';
import { ConfirmDialog } from './services/confirm-dialog.component';
import { DialogsService } from './services/confirm-dialog.service';
import { EditDialog } from './services/edit-dialog.component';
import { EditDialogsService } from './services/edit-dialog.service';
import { AlertComponent } from './services/alert.component';
import { AlertService } from './services/alert.service';
import { BandmemberService } from './services/bandmember.service';
import { BandinfoService } from './services/bandinfo.service';
import { Colors } from './models/colors';

// Pipes
import { FilterArrayPipe } from './pipes/filter-array-pipe';
import { SortingPipe } from './pipes/sorting-pipe';


// Firebase consts
export const firebaseConfig = {
  apiKey: "AIzaSyCTT4vGbQtyT9UswrB-tElns3vVZaxKXMM",
  authDomain: "simple-musician.firebaseapp.com",
  databaseURL: "https://simple-musician.firebaseio.com/",
  projectId: "simple-musician",
  storageBucket: "simple-musician.appspot.com",
  messagingSenderId: "45229862642"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderIndexComponent,
    HeaderIndexFormComponent,
    HeaderTabsComponent,
    HomepageComponent,
    HomepageHeaderComponent,
    GearListComponent,
    CalendarEventComponent,
    CalenderAddComponent,
    FilterArrayPipe,
    ConfirmDialog,
    EditDialog,
    AlertComponent,
    HomepageUiComponent,
    BandinfoComponent,
    BandmemberComponent,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    NgbModule.forRoot(),
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdDialogModule,
    MdButtonModule,
    MdSnackBarModule
  ],
  entryComponents: [
    ConfirmDialog,
    EditDialog
  ],
  providers: [
    FirebaseService,
    GearListService,
    EventsService,
    DialogsService,
    EditDialogsService,
    AlertService,
    BandmemberService,
    BandinfoService,
    Colors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
