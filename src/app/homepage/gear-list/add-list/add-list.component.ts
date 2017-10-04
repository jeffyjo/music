import { GearList } from './../../../models/gearlist';
import { GearListsService } from './../gear-lists.service';
import { AddListDialogsService } from './addList-dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
  providers: [ AddListDialogsService ]
})
export class AddListComponent implements OnInit {

  constructor(private addList: AddListDialogsService,
              private listsService: GearListsService
  ) { }

  ngOnInit() {
  }

  openAddListDialog(){
    this.addList.confirm('Create new list').subscribe(res => {
      console.log(res)
      if(res){
        let newList = {
          _id : '',
          name: res,
          gear: ''
        }
          this.listsService.addList(newList)
      }
    })
      
  }

}
