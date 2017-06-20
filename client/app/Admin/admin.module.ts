import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AdminComponent} from './admin.component'
import {AdminRoutingModule} from './admin.router.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule, AdminRoutingModule],
  declarations: [ AdminComponent]

})
export class AdminModule { }
