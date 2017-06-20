import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {NotFoundComponent} from './notfound.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/admin', pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
