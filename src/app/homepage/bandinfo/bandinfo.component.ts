import { Component, OnInit, Output } from '@angular/core';

import { BandMember } from './../../models/bandMember';
import { BandmemberService } from './../../services/bandmember.service';

import { Bandinfo } from './../../models/bandinfo';
import { BandinfoService } from './../../services/bandinfo.service';

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

  constructor(
    private bandMemberService: BandmemberService,
    private bandInfoService: BandinfoService
  ) { 
    this.bandinfo = {
      $key: '',
      bandName: '',
      bandPhone: 0,
      bandMail: '',
    }
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
    let bandinfo = {
      bandName: controls.bandName.value,
      bandMail: controls.bandMail.value,
      bandPhone: controls.bandPhone.value,
      bandDescription: controls.bandDescription.value,
      bandPressRelease: controls.bandPressRelease.value
    }
    this.bandInfoService.updateBandinfo(bandinfo)
    this.isEditting = false
  }

}
