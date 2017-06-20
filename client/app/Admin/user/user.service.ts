import { Injectable } from '@angular/core';
import {Http, Headers,  RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export class User{
  constructor(public id:number, public name:string, public address:string, public dob:Date, public phone: number, public email:string){}
}

/*let USERS=[
  new User(1, 'John'),
  new User(2, 'Bob'),
  new User(3, 'George')
];

let usersPromise = Promise.resolve(USERS);*/

@Injectable()
export class UserService {
  constructor(private http:Http){}
  getUsers(){
    return this.http.get('/api/users')
      .map(res=> res.json());
  }

  addUser(newUser:User){
    console.log(newUser)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/users', JSON.stringify(newUser), {headers: headers})
        .map(res => res.json());
  }

  getUser(id:number | string){
    var obj={"id": id};
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user/', JSON.stringify(obj), {headers: headers} )
      .map(res=>res.json());
  }

  editUser(editedUser: User){
    console.log(editedUser)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/edituser', JSON.stringify(editedUser), {headers: headers})
        .map(res => res.json());
  }
}
