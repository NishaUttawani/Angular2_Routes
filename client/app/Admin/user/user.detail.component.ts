import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User, UserService }  from './user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'user.detail.component.html',
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getUser(+params['id']))
      .subscribe((user: User) => this.user = user);


  }

  gotoUsers(user:User) {
    //let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/user', { id: user.id, foo: 'foo' }]);
  }

  editUser(e:Event){
    e.preventDefault();
    var editedUser:User =this.user;
    this.service.editUser(editedUser)
      .subscribe( user=>{
        this.user = user;
        this.router.navigate(['/user', { id: editedUser.id, foo: 'foo' }]);
      });

  }
}
