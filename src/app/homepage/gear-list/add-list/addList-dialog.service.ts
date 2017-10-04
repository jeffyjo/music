import { Observable } from 'rxjs/Rx';
import { AddListDialog } from './addList.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class AddListDialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string): Observable<boolean> {

        let dialogRef: MdDialogRef<AddListDialog>;

        dialogRef = this.dialog.open(AddListDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.input = '';

        return dialogRef.afterClosed();
    }
}