import { MdDialogRef } from '@angular/material';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'addList-dialog',
    template: `
        <h3>{{ title }}</h3>
        <br>
        <Input class="form-control" 
            #listName 
            placeholder="Enter name ..." >
        <br>
        <div class="btn-container">
            <button class="btn btn-default" type="button"
                (click)="dialogRef.close()">Cancel</button>
            <button class="btn btn-success" type="button"
                (click)="dialogRef.close(listName.value)"
                >OK</button>
        </div>
    `,
    styles: [`
        .btn-container {
            display: flex;
            justify-content: space-around;
        }
        .btn: {
            font-size: 40px;
        }
    `]
})
export class AddListDialog {

    public title: string;
    public input: any

    constructor(public dialogRef: MdDialogRef<AddListDialog>) {

    }
}