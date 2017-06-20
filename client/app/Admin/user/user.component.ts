import { Component, OnInit } from '@angular/core';
import {UserService, User} from './user.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'user.component.html'
})
export class UserComponent{
  users: User[];
  name : string;
  dob: Date;
  phone: number;
  email:string;
  address: string;
  id : number;
  selectedId: number;


  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router){  }

  ngOnInit(){
      this.route.params.subscribe(params=>{
        this.selectedId= +params['id']

      });

      this.service.getUsers()
        .subscribe((users)=>{
          this.users=users;
        })

  }

  addUser(e: Event){
    e.preventDefault();
    if(this.users.length != 0){
      var index= this.users.length-1;
       this.id= (this.users[index].id)+1;
    }
    else{
      this.id= 1;
    }

     var newUser:User = {
         name:this.name,
         id:this.id,
         dob:this.dob,
         phone:this.phone,
         email: this.email,
         address:this.address
     }
     this.service.addUser(newUser)
     .subscribe( user=>{
       this.users.push(user);
     });

  } //end of addUser()

  onSelect(user:User){
    this.router.navigate(['/user', user.id])
  }

  isSelected(user: User) {
     return user.id === this.selectedId;
   }

}
