
import { jurusan } from './jurusan';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
  })
export class JurusanService { 
    constructor(private http : HttpClient){}

    url = "http://localhost:8080/jurusan";

    getjurusan(): Observable<jurusan[]> {
        return this.http.get<jurusan[]>(this.url+"/findAll")
    }
    savejurusan(jurusanDto: jurusan):Observable<jurusan>{
        return this.http.post<jurusan>(this.url+"/save",jurusanDto,httpOptions);
    }
    deletejurusan(id:number):Observable<{}>{
      return this.http.delete(this.url+"/delete/"+`${id}`,httpOptions);
    }
    getjurusanById(id:number): Observable<jurusan> {
      return this.http.get<jurusan>(this.url+"/findById/"+`${id}`,httpOptions);
    }  
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};