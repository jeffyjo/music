import { FirebaseService } from './firebase.service';
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

    updateList(list: any){
        // console.log(list.$key, list)
        this.lists.update(list.$key, list)
        // return this.lists.update(key, list)
    }

    updatePrimary(list){
        list.primary = false
        this.updateList(list)
        let listToUpdate
        let key
        this.lists.forEach(l => {
            l.map(i => {
                if(i.$key === list.$key){
                    i.primary = true
                } else {
                    i.primary = false
                }
                this.updateList(i)
            })
        });
    }

    addList(list){
        this.lists.push(list)
    }
}