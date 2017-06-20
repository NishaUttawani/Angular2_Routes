import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './user.component';
import {UserDetailComponent} from './user.detail.component';

const appRoutes: Routes = [
  {path:'user', component:UserComponent},
  {path:'user/:id', component:UserDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
