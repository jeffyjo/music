import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <h5>{{ title }}</h5>
        <p>{{ message }}</p>
        <div class="btn-container">
            <button class="btn btn-danger" type="button"
                (click)="dialogRef.close(true)">OK</button>
            <button class="btn btn-default" type="button"
                (click)="dialogRef.close()">Cancel</button>
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
export class ConfirmDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}