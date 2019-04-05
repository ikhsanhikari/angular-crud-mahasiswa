import { Component, Inject, Optional } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';



export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'custom-notification',
  templateUrl: './custom-notification.component.html',
})


export class CustomNotificationComponent {
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData, private dialog:MatDialog) {}

  openDialog() {
    this.dialog.open(CustomNotificationComponent, {
      data: {
        animal: 'lion'
      }
    });
  }
}