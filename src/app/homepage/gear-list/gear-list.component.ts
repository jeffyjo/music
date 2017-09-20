import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import { GearListService } from './../../services/gearList.service';
import { FirebaseService } from './../../services/firebase.service';
import { FilterArrayPipe } from './../../pipes/filter-array-pipe';
import { Category } from './../../models/category';

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
  addButtonText = 'Add'
  editButtonText = 'Edit';
  isAdding = false
  isEditting = false
  gearList 
  filteredStatus = ''
  dataReady = false;
  catList = new Category().categoryList

  constructor(private gearListService: GearListService) { }

  // Firebase initiazation
  ngOnInit() {  
    this.gearListService.getGearList().subscribe(list => {
      this.gearList = list
      this.dataReady = true
    })
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
