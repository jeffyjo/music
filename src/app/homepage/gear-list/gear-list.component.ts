import { GearList } from './../../models/gearlist';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import { GearListService } from './../../services/gearList.service';
import { FirebaseService } from './../../services/firebase.service';
import { FilterArrayPipe } from './../../pipes/filter-array-pipe';
import { Category } from './../../models/category';
import { GearListsService } from './gear-lists.service';

class Gear {
  id: string
  name : string
  owner: string
  category: string
  done : boolean
  $key : any
}

interface List {
  _id: string
  name: string
  primary: boolean
  $key: any
  gear: any
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
      // this.gearLists = lists
      lists.map((list : List) => {
        if(list.primary){
          this.list = list
          this.listReady = true
          this.gearLists[0] = list
          this.list = list
          // this.gearList = list.gear
          this.listPressed(list)
          this.dataReady = true
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

  // Add Button Clicked
  addClicked(f : NgForm){
    let form = f.value
    let newItem = {
      name: form.name,
      owner: form.owner,
      category: form.category,
      done: false
    }
    
    this.gearListService.addGear(newItem, this.list.$key)
    f.reset()

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
