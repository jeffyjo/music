import { GearListsService } from './gear-lists.service';
import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable()
export class BandinfoService {
  bandInfo

  constructor(private firebaseService: FirebaseService,
              private lists: GearListsService
  ) {
    this.bandInfo = this.firebaseService.af.object('/bandinfo')
   }
  
  getBandinfo(){
    return this.bandInfo
  }

  updateBandinfo(bandinfo){
    this.lists.updatePrimary(bandinfo.gearList)
    // return this.bandInfo.update(bandinfo)
  }

}
