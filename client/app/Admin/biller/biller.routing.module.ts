import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BillerComponent} from './biller.component';
import {BillerDetailComponent} from './biller.detail.component';

const appRoutes: Routes = [
  {path:'biller', component:BillerComponent},
  {path:'biller/:id', component:BillerDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BillerRoutingModule { }
