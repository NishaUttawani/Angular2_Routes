import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

export class Biller{
  constructor(
    public id:number,
    public billerName: string,
    public billerType: string,
    public officeAddress={
      email: '',
      streetAdress: '',
      zipCode:0,
      city: '',
      country: '',
      phone: 0
    }
  ){}
}


@Injectable()
export class BillerService {
  constructor(private http:Http){}
  getBillers(){
    return this.http.get('/api/billers')
      .map(res=> res.json());
  }

  addBiller(newBiller:Biller){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/billers', JSON.stringify(newBiller), {headers: headers})
        .map(res => res.json());
  }

  getBiller(id:number | string){
    var obj={"id": id};
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/biller/', JSON.stringify(obj), {headers: headers} )
      .map(res=>res.json());
  }

  editBiller(editedBiller: Biller){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/editbiller', JSON.stringify(editedBiller), {headers: headers})
        .map(res => res.json());
  }
}
