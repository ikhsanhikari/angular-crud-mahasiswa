import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, } from '@angular/material';
import { MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  message: string
}

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog,
  public dialogRef: MatDialogRef<DialogConfirmComponent>) { }

  ngOnInit() {
  }
  confirm(messageDialog:string) {
    this.dialog.open(DialogConfirmComponent, {
      data: {
        message: messageDialog
      }
    });
  }
  public onYesOption(): void {
    this.dialogRef.close(this.data);
  }

  public onNoOption(): void  {
    this.dialogRef.close();
  }

}
