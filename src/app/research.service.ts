import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import{map} from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  Url="";
  constructor(private http:HttpClient) { 
    this.Url="http://test.rdcsolution.com:8080";
  }
  adddata(title: any): void {
    if (sessionStorage.getItem('totoList') == null) {
      sessionStorage.setItem('totoList', JSON.stringify(title));
    } else {
      var data = JSON.parse(sessionStorage.getItem('totoList'));
      sessionStorage.removeItem('totoList');
      var newItem = this.merge_options(data, title);
      sessionStorage.setItem('totoList', JSON.stringify(newItem));
    }
  }
  merge_options(obj1, obj2): any {
    var obj3 = {};
// tslint:disable-next-line: forin
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
// tslint:disable-next-line: forin
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }
  UserData(obj): any {
    return this.http.post(`${this.Url}/userdata`, obj).pipe(map(y => {
      return y;
    }))
  }

  PartnerData(obj): any{
    return this.http.post(`${this.Url}/partnerdata`, obj).pipe(map(y => {
      return y;
  }))
}

addData(obj): any{
  return this.http.post(`${this.Url}/pdf` , obj).pipe(map(y=>{
   return y;
  }))
}
  getAllData():any{
    return this.http.get(`${this.Url}/finddata`).pipe(map(x=>{
      return x;
    }))
  }
  findbyid(title) {
    return this
      .http
      .get(`${this.Url}/findbyTitle?title=`+title);
  }

}
