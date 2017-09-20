import { EventsService } from './events.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { Component, Input, OnInit } from '@angular/core';
import { Colors } from './../models/colors';

@Component({
    selector: 'edit-dialog',
    template: `
    <h3><strong>Edit:</strong> {{ title }}</h3>
    <hr>
    <form #f="ngForm" (ngSubmit)="submit(f)">
        <div class="form-group">
            <label for="eventName">Event</label>
            <input class="form-control" type="text" [(ngModel)]="title" name="title" required="">
        </div>
        <div class="form-group">
                <label for="eventStartDate">Start Date</label>
                <div class="datepicker-container">
                    <input 
                        class="form-control" 
                        mdInput [mdDatepicker]="startPicker" 
                        [ngModel]="startDate" 
                        name="startDate" 
                        required
                        (ngModelChange)="startDate = $event">
                    <md-datepicker-toggle mdSuffix [for]="startPicker"></md-datepicker-toggle>
                    <md-datepicker #startPicker></md-datepicker>
                </div>
        </div>
        <div class="form-group">
            <label for="eventEndDate">End Date</label>
            <div class="datepicker-container">
                <input 
                    class="form-control" 
                    mdInput [mdDatepicker]="endPicker" 
                    [ngModel]="endDate" 
                    name="endDate" 
                    required
                    (ngModelChange)="endDate = $event">
                <md-datepicker-toggle mdSuffix [for]="endPicker"></md-datepicker-toggle>
                <md-datepicker #endPicker></md-datepicker>
            </div>
        </div>
        <div class="form-group">
            <label for="eventEndDate">Color</label>
            <md-input-container class="color-container" style="margin-right: 10px;">
            <div class="color-box" [ngStyle]="{'background-color' : color?.colorHex.primary }"></div>
            <md-select #select="mdSelect" [(ngModel)]="color" name="color" required (click)="updated($event)">
                <md-option 
                    *ngIf="!colorUpdated"
                    class="color-box-container"
                    [value]="color">{{ color.value }}
                </md-option>
                <md-option 
                    *ngFor="let c of colors" 
                    class="color-box-container" 
                    [value]="c">
                    <span class="color-box" 
                        [ngStyle]="{'background-color' : c.colorHex.primary }"
                    ></span> {{ c.value }}</md-option>
            </md-select>
            </md-input-container>
        </div>
        <div class="btn-container">
            <button class="btn btn-success" type="submit"
                (click)="dialogRef.close(true)">OK</button>
            <button class="btn btn-default" type="button"
                (click)="dialogRef.close()">Cancel</button>
        </div>
    <form>
    `,
    styles: [`
        .datepicker-container {
            display: flex;
            flex-direction: row;
        }
        .color-box-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .color-box{
            float: left;
            width: 20px;
            height: 20px;
            border: 1px solid rgba(0, 0, 0, .2);
            margin: 5px;
        }
        .btn-container {
            display: flex;
            justify-content: space-around;
        }
        .btn: {
            font-size: 40px;
        }
    `]
})
export class EditDialog implements OnInit {

    public event
    public $key
    public title
    public startDate
    public endDate
    public color
    colorUpdated = false

    private colorArray = new Colors
    colors = this.colorArray.colors

    constructor(public dialogRef: MdDialogRef<EditDialog>,
                private es: EventsService) {
        
        
    }

    ngOnInit(){   
        console.log(this.color)
    }

    submit(f : NgForm){
        console.log(f)
        console.log(f.value)
        this.es.updateEvent(this.$key, f.value)
    }

    updated(updated : boolean){
        console.log(updated)
        if(this.color === this.color){
            this.colorUpdated = true
        }
    }
}