import { Component, OnInit, Output } from '@angular/core';

import { BandMember } from './../../models/bandMember';
import { BandmemberService } from './../../services/bandmember.service';

import { Bandinfo } from './../../models/bandinfo';
import { BandinfoService } from './../../services/bandinfo.service';

import { GearListsService } from './../../services/gear-lists.service';
import { List } from './../../models/list';

@Component({
  selector: 'app-bandinfo',
  templateUrl: './bandinfo.component.html',
  styleUrls: ['./bandinfo.component.scss']
})
export class BandinfoComponent implements OnInit {
  isEditting = false
  @Output() bandMembers : BandMember[]
  bandinfo : Bandinfo 
  bandinfoAvailable = false
  list
  gearList = []

  constructor(
    private bandMemberService: BandmemberService,
    private bandInfoService: BandinfoService,
    private lists: GearListsService
  ) { 
    this.bandinfo = {
      $key: '',
      bandName: '',
      bandPhone: 0,
      bandMail: '',
    }

     // Get list to dropdown
     this.lists.getFullList().subscribe(lists => {
      // this.gearLists = lists
      lists.map((list : List) => {
        if(list.primary){
          this.list = list
          this.gearList.unshift(list)
          this.listPressed(list)
        } else {
          this.gearList.push(list)
        }
      })
    })
  }

  listPressed(list){
    this.list = list
  }

  ngOnInit() {
    this.loadBandinfo()
    this.bandMembers = []
    this.loadMembers()
  }

  loadBandinfo(){
    this.bandInfoService.getBandinfo().subscribe(info => { 
      this.bandinfo = info
      this.bandinfoAvailable = true
    })
  }

  loadMembers(){
    this.bandMemberService.getBandMembers().subscribe(list => {
      this.bandMembers = list
      console.log(list)
    })
  }

  editPressed(){
    this.isEditting = !this.isEditting
  }

  addPressed(){
    let member = <BandMember> {
      name: '', 
      role: '', 
      mail: '', 
      phone: null, 
      color:  null,
      edit: true
    }

    this.bandMemberService.bandMembers.push(member)
  }

  saveBandinfoPressed(form){
    let controls = form.controls
    let gearList = controls.list.value
    gearList.primary = true

    let bandinfo = {
      bandName: controls.bandName.value,
      bandMail: controls.bandMail.value,
      bandPhone: controls.bandPhone.value,
      gearList: gearList,
      bandDescription: controls.bandDescription.value,
      bandPressRelease: controls.bandPressRelease.value
    }

    this.bandInfoService.updateBandinfo(bandinfo)
    this.isEditting = false
  }

}
