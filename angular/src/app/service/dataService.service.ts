import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Users} from '../shared/user';
import{Observable} from 'rxjs/Rx';
@Injectable()
export class dataService{
  
  listOfItem=['Home','About us','Contact us','login'];
  constructor(private http:Http){

  }
  getListOfItem()
  {
    return this.listOfItem;
  }
  getUsers():Observable<Users[]>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users")    .map((res: Response)=>res.json()).catch((error: any) =>           Observable.throw(error.json().error || 'Server error'));
  }
}