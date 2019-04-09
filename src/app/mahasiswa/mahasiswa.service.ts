
import { mahasiswa } from './mahasiswa';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { provinsi } from './provinsi';
import { kota } from './kota';
import { kecamatan } from './kecamtan';
import { jurusan } from './../jurusan/jurusan';
import { desa } from './desa';


@Injectable({
    providedIn: 'root',
  })
export class mahasiswaService { 
    constructor(private http : HttpClient){}

    url = "http://192.168.195.126:8080/mahasiswa";
    urlProvinsi = "http://192.168.195.126:8080/provinsi";
    urlKota = "http://192.168.195.126:8080/kota";
    urlKecamatan = "http://192.168.195.126:8080/kecamatan";
    urlJurusan = "http://192.168.195.126:8080/jurusan";
    urlDesa = "http://192.168.195.126:8080/desa";

    getmahasiswa(): Observable<mahasiswa[]> {
        return this.http.get<mahasiswa[]>(this.url+"/findAll")
    }
    savemahasiswa(mahasiswaDto: mahasiswa):Observable<mahasiswa>{
        return this.http.post<mahasiswa>(this.url+"/save",mahasiswaDto,httpOptions);
    }
    deletemahasiswa(id:number):Observable<{}>{
      return this.http.delete(this.url+"/delete/"+`${id}`,httpOptions);
    }
    getmahasiswaById(id:number): Observable<mahasiswa> {
      return this.http.get<mahasiswa>(this.url+"/findById/"+`${id}`,httpOptions);
    }
    getProvinsi(): Observable<provinsi[]> {
      return this.http.get<provinsi[]>(this.urlProvinsi+"/findAll")
    }
    getKota(id:string): Observable<kota[]> {
      return this.http.get<kota[]>(this.urlKota+"/"+`${id}`)
    }
    getKecamatan(id:string): Observable<kecamatan[]> {
      return this.http.get<kecamatan[]>(this.urlKecamatan+"/"+`${id}`)
    }
    getDesa(id:string): Observable<desa[]> {
      return this.http.get<desa[]>(this.urlDesa+"/"+`${id}`)
    }
    getJurusan(id:string): Observable<jurusan[]> {
      return this.http.get<jurusan[]>(this.urlJurusan+"/"+`${id}`)
    }  
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

