import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { DialogsService } from './../../../services/confirm-dialog.service';
import { BandmemberService } from './../../../services/bandmember.service';
import { Colors } from './../../../models/colors';

@Component({
  selector: 'app-bandmember',
  templateUrl: './bandmember.component.html',
  styleUrls: ['./bandmember.component.scss']
})
export class BandmemberComponent implements OnInit {
  @Input('edit') isEditting = false
  @Input('bandMember') member
  colors
  isColorUpdated = false

  constructor(
    private bandMemberService: BandmemberService, 
    private dialogService: DialogsService,
    private colorService: Colors
  ) { 
    this.colors = colorService.colors
  }

  ngOnInit() {
  }

  editPressed(){
    this.isEditting = !this.isEditting
  }

  deletePressed(){
    this.dialogService
    .confirm('Delete: ' + this.member.name, 'Are you sure you want to do this?')
    .subscribe(res => {
      if(res){
        this.bandMemberService.deleteBandMember(this.member)
      } else {
        return
      }
    })
  }

  savePressed(f : NgForm){
    this.member.color = f.controls.color.value
    // console.log(this.member)

    this.member.edit = false
    this.bandMemberService.updateBandMember(this.member.$key, this.member)
    this.isEditting = false
  }

  updatedColor(event){
    console.log(event)
    this.isColorUpdated = true
  }

}
