
import { user } from './user';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
  })
export class UserService { 
    constructor(private http : HttpClient){}

    url = "http://localhost:8080/user";

    getUser(): Observable<user[]> {
        return this.http.get<user[]>(this.url+"/findAll")
    }
    saveUser(userDto: user):Observable<user>{
        return this.http.post<user>(this.url+"/save",userDto,httpOptions);
    }
    deleteUser(id:number):Observable<{}>{
      return this.http.delete(this.url+"/delete/"+`${id}`,httpOptions);
    }
    getUserById(id:number): Observable<user> {
      return this.http.get<user>(this.url+"/findById/"+`${id}`,httpOptions);
    }  
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};