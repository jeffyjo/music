import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable()
export class BandinfoService {
  bandInfo

  constructor(private firebaseService: FirebaseService) {
    this.bandInfo = this.firebaseService.af.object('/bandinfo')
   }
  
  getBandinfo(){
    return this.bandInfo
  }

  updateBandinfo(bandinfo){
    return this.bandInfo.update(bandinfo)
  }

}
