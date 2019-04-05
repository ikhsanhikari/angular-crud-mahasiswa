import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FakultasService } from './../fakultas/fakultas.service';
import { fakultas } from '../fakultas/fakultas';
import { jurusan } from '../jurusan/jurusan';
import { JurusanService } from './../jurusan/jurusan.service';
import { mahasiswaService } from './mahasiswa.service';
import { mahasiswa } from './mahasiswa';
import { NotificationResultComponent } from '../notification-result/notification-result.component';
import { provinsi } from './provinsi';
import { kota } from './kota';
import { kecamatan } from './kecamtan';
import { desa } from './desa';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {

  mahasiswaForm= new FormGroup({
    id:new FormControl(1,Validators.required),
    angkatanKe:new FormControl('',Validators.required),
    blok:new FormControl('',Validators.required),
    desa:new FormControl('',Validators.required),
    fakultas:new FormControl('',Validators.required),
    golonganDarah:new FormControl('',Validators.required),
    jumlahSodara: new FormControl('',Validators.required),
    jurusan:new FormControl('',Validators.required),
    kota:new FormControl('',Validators.required),
    namaAyah:new FormControl('',Validators.required),
    namaBelakang:new FormControl('',Validators.required),
    namaDepan:new FormControl('',Validators.required),
    namaIbu:new FormControl('',Validators.required),
    provinsi:new FormControl('',Validators.required),
    nim:new FormControl('',Validators.required),
    pekerjaanAyah:new FormControl('',Validators.required),
    pekerjaanIbu:new FormControl('',Validators.required),
    pendapatanAyahPerBulan:new FormControl('',Validators.required),
    pendapatanIbuPerBulan:new FormControl('',Validators.required),
    rt:new FormControl('',Validators.required),
    rw:new FormControl('',Validators.required),
    statusPernikahan:new FormControl('',Validators.required),
    tanggalLahir:new FormControl('',Validators.required),
    kecamatan:new FormControl('',Validators.required),
  })
  constructor(private fakultasService:FakultasService,
    private jurusanService:JurusanService,
    private mahasiswaService:mahasiswaService,
    private notif: NotificationResultComponent,
    private dialog: MatDialog) { }

  listFakultas:fakultas[];
  listJurusan:jurusan[];
  listMahasiswa:mahasiswa[];
  listProvinsi: provinsi[];
  listKota: kota[];
  listKecamatan : kecamatan[];
  listDesa: desa[];
  statusJurusan=false;
  ngOnInit() {
    this.getFakultas(); 
    this.getMahasiswa();
    this.getProvinsi();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.mahasiswaForm.controls[controlName].hasError(errorName);
  }
  getFakultas(): void {
    this.fakultasService.getfakultas()
      .subscribe((data: any) => {
        this.listFakultas = data.data;
      });
  }
  // getJurusan(): void {
  //   this.jurusanService.getjurusan()
  //     .subscribe((data: any) => {
  //       this.listJurusan = data.data;
  //     });
  // }
  getMahasiswa(): void {
    this.mahasiswaService.getmahasiswa()
    .subscribe((data:any)=>{
      this.listMahasiswa = data.data;
    });
  }
  getProvinsi(): void {
    this.mahasiswaService.getProvinsi()
    .subscribe((data:any)=>{
      this.listProvinsi = data.data;
    });
  }

  getKota(id:string): void {
    this.mahasiswaService.getKota(id)
    .subscribe((data:any)=>{
      this.listKota = data;
    });
  }
  getKecamatan(id:string): void {
    this.mahasiswaService.getKecamatan(id)
    .subscribe((data:any)=>{
      this.listKecamatan = data;
    });
  }
  getDesa(id:string): void {
    this.mahasiswaService.getDesa(id)
    .subscribe((data:any)=>{
      this.listDesa = data;
    });
  }
  getJurusan(id:string): void {
    this.mahasiswaService.getJurusan(id)
    .subscribe((data:any)=>{
      this.listJurusan = data;
      this.statusJurusan = true;
    });
  }

  save():void{
    let validity = this.mahasiswaForm.dirty;
    if(validity){
      console.log('valid');
     this.mahasiswaService.savemahasiswa({
       id:10,
       namaDepan:this.mahasiswaForm.get('namaDepan').value,
       namaBelakang:this.mahasiswaForm.get('namaBelakang').value,
       tanggalLahir:this.mahasiswaForm.get('tanggalLahir').value,
       namaAyah:this.mahasiswaForm.get('namaAyah').value,
       namaIbu:this.mahasiswaForm.get('namaIbu').value,
       angkatanKe:this.mahasiswaForm.get("angkatanKe").value,
       provinsi:this.mahasiswaForm.get("provinsi").value,
       kota:this.mahasiswaForm.get("kota").value,
       desa:this.mahasiswaForm.get("desa").value,
       rt:this.mahasiswaForm.get("rt").value,
       rw:this.mahasiswaForm.get("rw").value,
       golonganDarah:this.mahasiswaForm.get("golonganDarah").value,
       blok:this.mahasiswaForm.get("blok").value,
       fakultas:this.mahasiswaForm.get("fakultas").value,
       jumlahSodara:this.mahasiswaForm.get("jumlahSodara").value,
       jurusan:this.mahasiswaForm.get("jurusan").value,
       nim:this.mahasiswaForm.get("nim").value,
       pekerjaanAyah:this.mahasiswaForm.get("pekerjaanAyah").value,
       pekerjaanIbu:this.mahasiswaForm.get("pekerjaanIbu").value,
       pendapatanAyahPerBUlan:this.mahasiswaForm.get("pendapatanAyahPerBulan").value,
       pendapatanIbuPebulan:this.mahasiswaForm.get("pendapatanIbuPerBulan").value,
       statusPernikahan:this.mahasiswaForm.get("statusPernikahan").value,
       kecamatan:this.mahasiswaForm.get("kecamatan").value,
     })
     .subscribe((data:any)=>{
       this.getMahasiswa()
       this.notif.openDialog('success','Berhasil save data');
     });
    }else{
       console.log('error dirty');
    }
    
  } 
  deleteMahasiswa(element: any): void {
    this.dialog.open(DialogConfirmComponent,
      {
        data: { selectedData: element }
      }).afterClosed().subscribe((data: any) => {
        if (data) {
          console.log(element);
          this.mahasiswaService.deletemahasiswa(element).subscribe((data) => {
            this.getMahasiswa();
            //  this.openSnackBar("Delete Data with Id "+element.position+"  Success", "close","red-snackbar") ;
          });
        }
      });
  }
}
