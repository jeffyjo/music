import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BandinfoComponent } from './bandinfo.component';
import { BandMember } from './../../models/bandMember';
import { BandmemberService } from './../../services/bandmember.service';

class MockBandmemberService {
  private bandMembers : BandMember[] = [
    {
      $key: "-Ku06CiFzVWPuos1Jh0V",
      name: "Jeff",
      role: "GuitarPlayer",
      mail: "jeff@jeff.dk",
      phone: 12345678,
      color: {
                "colorHex" : {
                  "primary" : "#ad2121",
                  "secondary" : "#FAE3E3"
                },
                "value" : "Red"
              },
      edit: false
    },
    {
      $key: "-Ku4vF6zrjs5Ig5E1kHs",
      name: "Kong James",
      role: "Flute",
      mail: "james@james.dk",
      phone: 12312312,
      color: {
                "colorHex" : {
                  "primary" : "#1e90ff",
                  "secondary" : "#D1E8FF"
                },
                "value" : "Blue"
              },
      edit: false
  },
  {
    $key: "-Ku51-DKvp6euj--3dZt",
    name: "Rasmus",
    role: "Singer",
    mail: "ras@ras.dk",
    phone: 12312312,
    color: {
              "colorHex" : {
                "primary" : "#e3bc08",
                "secondary" : "#FDF1BA"
              },
              "value" : "Yellow"
            },
    edit: false
  }
]

constructor(){}

public getBandMembers(){
  return this.bandMembers
}

}

describe('BandinfoComponent', () => {
  let component: BandinfoComponent;
  let fixture: ComponentFixture<BandinfoComponent>;
  let bandMembers : BandMember[]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandinfoComponent ],
      imports: [ FormsModule ],
      providers : [ { provide: BandmemberService, useClass: MockBandmemberService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // configure bandmembers to MOCK-bandmemberService
    bandMembers = new MockBandmemberService().getBandMembers()
    console.log(bandMembers)

  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
