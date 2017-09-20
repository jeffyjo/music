import { Colors } from './../models/colors';
import { Observable } from 'rxjs/Rx';
import { EditDialog } from './edit-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class EditDialogsService {
  private colors = new Colors

    constructor(private dialog: MdDialog) { }

    public edit(event: any): Observable<boolean> {

        let dialogRef: MdDialogRef<EditDialog>;

        dialogRef = this.dialog.open(EditDialog, {
          width: '40%'
        });
        dialogRef.componentInstance.event = event
        dialogRef.componentInstance.$key = event.$key
        dialogRef.componentInstance.title = event.title;
        dialogRef.componentInstance.startDate = event.start;
        dialogRef.componentInstance.endDate = event.end;
        let colorObj = this.colors.getColorFromObject(event.color)
        console.log(colorObj)
        dialogRef.componentInstance.color = colorObj;

        return dialogRef.afterClosed();
    }
}