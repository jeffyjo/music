import { FirebaseService } from './../../services/firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GearListsService {
    lists 
    currentList

    constructor(private firebase: FirebaseService){
        this.lists = this.firebase.af.list('/gearlists');
    }

    setCurrentList(list){
        this.currentList = list
    }

    getFullList(){
        return this.lists;
    }

    updateList(id: any, list: any){
        this.lists.update()
    }

    addList(list){
        this.lists.push(list)
    }
}