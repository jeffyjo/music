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
        // return this.gearList.push(gear)
        return this.firebaseService.af.list('/gearlists/' + listID + '/gear').push(gear)
    }

    deleteGear(gearKey){
        return this.gearList.remove(gearKey)
    }

    updateGear(gear, listID){
        // return this.gearList.update(gear.$key, gear)
        let currentGearList = this.firebaseService.af.list('/gearlists/' + listID + '/gear')
        // return currentGearList.update(gear.$key, gear)
        console.log(currentGearList)
        console.log(gear.$key)
    }

}