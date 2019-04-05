import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FakultasService } from './../fakultas/fakultas.service';
import { fakultas } from '../fakultas/fakultas';
import { JurusanService } from './jurusan.service';
import { jurusan } from './jurusan';
import { NotificationResultComponent } from '../notification-result/notification-result.component';
import { MatDialog } from '@angular/material';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-jurusan',
  templateUrl: './jurusan.component.html',
  styleUrls: ['./jurusan.component.css']
})
export class JurusanComponent implements OnInit {

  listJurusan: jurusan[];
  listFakultas: fakultas[];
  constructor(private fakultasService: FakultasService,
    private jurusanService: JurusanService,
    private notif: NotificationResultComponent,
    private dialog:MatDialog ) { }

  ngOnInit() {
    this.getFakultas();
    this.getJurusan();
  }

  jurusanForm = new FormGroup({
    id: new FormControl(1, Validators.required),
    codeJurusan: new FormControl('', Validators.required),
    namaJurusan: new FormControl('', Validators.required),
    codeFakultas: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  public hasError = (controlName: string, errorName: string) => {
    return this.jurusanForm.controls[controlName].hasError(errorName);
  }
  getFakultas(): void {
    this.fakultasService.getfakultas()
      .subscribe((data: any) => {
        this.listFakultas = data.data;
      });
  }
  getJurusan(): void {
    this.jurusanService.getjurusan()
      .subscribe((data: any) => {
        this.listJurusan = data.data;
      });
  }
  saveJurusan(): void {
    let validity = this.jurusanForm.dirty;
    if (validity) {
      console.log('valid');
      this.jurusanService.savejurusan({
        id: this.jurusanForm.get('id').value,
        codeJurusan: this.jurusanForm.get('codeJurusan').value,
        namaJurusan: this.jurusanForm.get('namaJurusan').value,
        description: this.jurusanForm.get('description').value,
        codeFakultas: this.jurusanForm.get('codeFakultas').value,

      })
        .subscribe((data: any) => {
          this.getJurusan();
          this.notif.openDialog('success', 'Berhasil save data');
        });
    } else {
      console.log('error dirty');
    }
  }
  deleteJurusan(element: any): void {
    this.dialog.open(DialogConfirmComponent,
      {
        data: { selectedData: element }
      }).afterClosed().subscribe((data: any) => {
        if (data) {
          console.log(element);
          this.jurusanService.deletejurusan(element).subscribe((data) => {
            this.getJurusan();
            //  this.openSnackBar("Delete Data with Id "+element.position+"  Success", "close","red-snackbar") ;
          });
        }
      });
  }
}
