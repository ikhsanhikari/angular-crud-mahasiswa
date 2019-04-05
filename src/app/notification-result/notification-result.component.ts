import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  type: 'warn' | 'success' | 'danger';
}
@Component({
  selector: 'app-notification-result',
  templateUrl: './notification-result.component.html',
  styleUrls: ['./notification-result.component.css']
})
export class NotificationResultComponent implements OnInit {  

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData, private dialog:MatDialog) { }
  
  ngOnInit() {
  }
  openDialog(typeDialog:string,messageDialog:string) {
    this.dialog.open(NotificationResultComponent, {
      panelClass: typeDialog,
      data: {
        type: typeDialog,
        message: messageDialog
      }
    });
  }
  

}
