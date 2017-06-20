import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {NotFoundComponent} from './notfound.component';
import {AdminModule} from './Admin/admin.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule,FormsModule,AdminModule, AppRoutingModule ],
  declarations: [ AppComponent, NotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
