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
      lists.map(list => {
        if(list.primary){
          this.list = list
          this.listReady = true
          this.gearLists[0] = list
          console.log(list)
          let objToArray = Object.keys(this.list.gear).map( gear => {
            return this.list.gear[gear]
          })
          this.gearList = objToArray
          this.dataReady = true
        } else {
          console.log(list)
          this.gearLists.push(list)
        }
      })
    })
  }

  // Firebase initiazation
  ngOnInit() {  
    // get list of gear from firebase
    this.gearListService.getGearList().subscribe(list => {
      // console.log(list)
      // this.gearList = list
      // this.dataReady = true
    })

    // Get list from selected list
    // this.gearList = this.list.gear
    // this.dataReady = true
  }

  listPressed(list, e){
    
    // Object.keys(list).map(i => console.log(i))
    let a = {}
    Object.assign(a, list)
    console.log(e)
    
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
    
    this.gearListService.addGear(newItem)
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

  // Save changes
  saveClicked(itemToUpdate) {
    this.gearListService.updateGear(itemToUpdate)
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
  
  deletePressed(itemToDelete) {
    this.gearListService.deleteGear(itemToDelete.$key)

  }

}
