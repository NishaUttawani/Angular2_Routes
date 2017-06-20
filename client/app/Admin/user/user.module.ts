import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from './user.service';
import {UserComponent} from './user.component';
import {UserDetailComponent} from './user.detail.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, UserRoutingModule ],
  declarations: [  UserComponent, UserDetailComponent],
 providers:     [UserService]
})
export class UserModule { }
