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

    addGear(gear){
        return this.gearList.push(gear)
    }

    deleteGear(gearKey){
        return this.gearList.remove(gearKey)
    }

    updateGear(gear){
        return this.gearList.update(gear.$key, gear)
    }

}