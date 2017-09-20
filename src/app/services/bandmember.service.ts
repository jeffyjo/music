import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BandmemberService {
  bandMembers

  constructor(private firebaseService: FirebaseService) {
    this.bandMembers = this.firebaseService.af.list('/bandmembers')
  }

  getBandMembers(){
    return this.bandMembers
  }

  addBandMember(member){
    return this.bandMembers.push(member)
  }

  deleteBandMember(member){
    return this.bandMembers.remove(member.$key)
  }

  updateBandMember(memberKey, member){
    return this.bandMembers.update(member.$key, member)
  }

}
