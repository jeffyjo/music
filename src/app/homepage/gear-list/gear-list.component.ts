import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';

import { FilterArrayPipe } from './../../pipes/filter-array-pipe';

// Services
import { GearListService } from './../../services/gearList.service';
import { FirebaseService } from './../../services/firebase.service';
import { GearListsService } from '../../services/gear-lists.service';

// Models
import { GearList } from './../../models/gearlist';
import { Category } from './../../models/category';
import { List } from '../../models/list';

class Gear {
  id: string
  name : string
  owner: string
  category: string
  done : boolean
  $key : any
}

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.scss'],
})

export class GearListComponent implements OnInit {
  gearLists = []
  list
  currentList
  listChanged = false;
  listReady = false
  addButtonText = 'Add'
  editButtonText = 'Edit';
  isAdding = false
  isEditting = false
  gearList 
  filteredStatus = ''
  dataReady = false;
  catList = new Category().categoryList

  constructor(private gearListService: GearListService,
              private lists: GearListsService,
  ) { 
    // Get list to dropdown
    this.lists.getFullList().subscribe(lists => {
      this.gearLists = []
      lists.map((list : List) => {
        if(list.primary){
          this.list = list
          this.listReady = true
          this.gearLists.unshift(list)
          this.list = list
          this.listPressed(list)
          this.dataReady = true
        } else {
          this.gearLists.push(list)
        }
      })
    })
  }
  ngOnInit() { }

  // Change gearlist when select is changed
  listPressed(list){
    let objToArray = Object.keys(this.list.gear).map( gear => {
       return this.list.gear[gear]
    })
    this.list = list
    this.gearList = objToArray
  }

  // FIX: Stay on list and don't go back to primary

  // Add Button Clicked
  addClicked(f : NgForm, list){
    let form = f.value
    let newItem = {
      name: form.name,
      owner: form.owner,
      category: form.category,
      done: false
    }
    
    this.gearListService.addGear(newItem, this.list.$key)
    f.reset()
    this.listPressed(list)

  }

  // Edit Button Clicked
  editClicked(){
    if ( this.isEditting ) {
      this.editButtonText = 'Edit'
    } else {
      this.editButtonText = 'Cancel'
    }
    this.isEditting = !this.isEditting
  }

  // Save changes to one gear Object
  saveClicked(itemToUpdate) {
    let gearID = this.getGearID(itemToUpdate)
    this.gearListService.updateGear(itemToUpdate, gearID, this.list.$key)
    this.editClicked();
  }

  // Save all gear objects
  saveAllClicked(){
    let list
    for(let gear of this.gearList){
      this.saveClicked(gear)
    }
    this.isEditting = false
  }
  
  // Delete one gear Object
  deletePressed(itemToDelete) {
    let gearID = this.getGearID(itemToDelete)
    this.gearListService.deleteGear(gearID, this.list.$key)
  }

  // Get gear ObjectID from this.list
  getGearID(item){
    for(let gearID in this.list.gear){
      if(this.list.gear[gearID].id === item.id){
        return gearID
      }
    }
  }

}
