
import { fakultas } from './fakultas';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
  })
export class FakultasService { 
    constructor(private http : HttpClient){}

    url = "http://localhost:8080/fakultas";

    getfakultas(): Observable<fakultas[]> {
        return this.http.get<fakultas[]>(this.url+"/findAll")
    }
    savefakultas(fakultasDto: fakultas):Observable<fakultas>{
        return this.http.post<fakultas>(this.url+"/save",fakultasDto,httpOptions);
    }
    deletefakultas(id:number):Observable<{}>{
      return this.http.delete(this.url+"/delete/"+`${id}`,httpOptions);
    }
    getfakultasById(id:number): Observable<fakultas> {
      return this.http.get<fakultas>(this.url+"/findById/"+`${id}`,httpOptions);
    }  
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};