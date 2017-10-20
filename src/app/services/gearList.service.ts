import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable()
export class GearListService {
    gearList
    
    constructor(private firebaseService: FirebaseService) {
        this.gearList = this.firebaseService.af.list('/gear')
    }

    getGearList(){
        return this.gearList
    }

    addGear(gear, listID){
        return this.firebaseService.af.list('/gearlists/' + listID + '/gear').push(gear)
    }

    deleteGear(gearKey, listID){
        let currentGearList = this.firebaseService.af.list('/gearlists/' + listID + '/gear')
        return currentGearList.remove(gearKey)
    }

    updateGear(gear, gearID, listID){
        let currentGearList = this.firebaseService.af.list('/gearlists/' + listID + '/gear')
        return currentGearList.update(gearID, gear)
    }

}