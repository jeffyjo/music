import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';

import { BandmemberComponent } from './bandmember.component';
import { BandmemberService } from './../../../services/bandmember.service';
import { DialogsService } from './../../../services/confirm-dialog.service';
import { Colors } from './../../../models/colors';

class MockBandmemberService {
  
}

class MockDialogsService {

}

describe('bandmemberComponent', ()=> {
    let component: BandmemberComponent
    let fixture: ComponentFixture<BandmemberComponent>

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [BandmemberComponent],
      imports: [FormsModule, MdSelectModule],
      providers: [
        Colors,
        { provide: BandmemberService, useClass: MockBandmemberService },
        { provide: DialogsService, useClass: MockDialogsService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandmemberComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('isEditting should be false', () => {
    expect(component.isEditting).toBeFalsy()
  })

  it('editPressed changes isEditting to true', ()=> {
    expect(component.isEditting).toBeFalsy()

    component.editPressed()
    expect(component.isEditting).toBeTruthy()

  })

  it('isColorUpdated should be false', () => {
    expect(component.isColorUpdated).toBeFalsy()
  })

  it('updatedColor() should change isColorUpdated to true', () => {
    expect(component.isColorUpdated).toBeFalsy()

    let event = Event
    component.updatedColor(event)

    expect(component.isColorUpdated).toBeTruthy()
  })

  it('should have colors', () => {
    expect(component.colors).toBeTruthy()
  })
});


// import { FormsModule } from '@angular/forms';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// // Angular Material
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { 
//   MdSelectModule, 
//   MdDatepickerModule, 
//   MdNativeDateModule, 
//   MdDialog, 
//   MdDialogRef, 
//   MD_DIALOG_DATA,
//   MdDialogModule,
//   MdButtonModule,
//   MdSnackBarModule
// } from '@angular/material';

// import { BandmemberComponent } from './bandmember.component';

// describe('BandmembersComponent', () => {
//   let component: BandmemberComponent;
//   let fixture: ComponentFixture<BandmemberComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ BandmemberComponent ],
//       imports: [ 
//         FormsModule, 
//         BrowserAnimationsModule, 
//         MdSelectModule, 
//         MdDatepickerModule, 
//         MdNativeDateModule, 
//         MdDialog, 
//         MdDialogRef, 
//         MD_DIALOG_DATA,
//         MdDialogModule,
//         MdButtonModule,
//         MdSnackBarModule 
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BandmemberComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should be created', () => {
//   //   expect(component).toBeTruthy();
//   // });
// });
