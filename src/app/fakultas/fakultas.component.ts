import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FakultasService } from './fakultas.service';
import { fakultas } from './fakultas';
import { NotificationResultComponent } from '../notification-result/notification-result.component';
import { MatDialog } from '@angular/material';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-fakultas',
  templateUrl: './fakultas.component.html',
  styleUrls: ['./fakultas.component.css']
})
export class FakultasComponent implements OnInit {
  panelOpenState = false;
  listFakultas: fakultas[];
  constructor(private fakultasService: FakultasService,
    private notif: NotificationResultComponent,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getFakultas();
  }

  fakultasForm = new FormGroup({
    id: new FormControl(1, Validators.required),
    codeFakultas: new FormControl('', Validators.required),
    namaFakultas: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  public hasError = (controlName: string, errorName: string) => {
    return this.fakultasForm.controls[controlName].hasError(errorName);
  }
  getFakultas(): void {
    this.fakultasService.getfakultas()
      .subscribe((data: any) => {
        this.listFakultas = data.data;
      });
  }
  saveFakultas(): void {
    let validity = this.fakultasForm.dirty;
    if (validity) {
      console.log('valid');
      this.fakultasService.savefakultas({
        id: this.fakultasForm.get('id').value,
        codeFakultas: this.fakultasForm.get('codeFakultas').value,
        namaFakultas: this.fakultasForm.get('namaFakultas').value,
        description: this.fakultasForm.get('description').value,
      })
        .subscribe((data: any) => {
          this.getFakultas();
          this.notif.openDialog('success', 'Berhasil save data');
        });
    } else {
      console.log('error dirty');
    }
  }

  deleteFakultas(element: any): void {
    this.dialog.open(DialogConfirmComponent,
      {
        data: { selectedData: element }
      }).afterClosed().subscribe((data: any) => {
        if (data) {
          console.log(element);
          this.fakultasService.deletefakultas(element).subscribe((data) => {
            this.getFakultas();
            //  this.openSnackBar("Delete Data with Id "+element.position+"  Success", "close","red-snackbar") ;
          });
        }
      });
  }
  onselect(id: any) {
    this.fakultasForm.patchValue({

    })
  }
}
