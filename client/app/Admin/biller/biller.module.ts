import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BillerRoutingModule} from './biller.routing.module';
import {BillerService} from './biller.service';
import {BillerComponent} from './biller.component';
import {BillerDetailComponent} from './biller.detail.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, BillerRoutingModule ],
  declarations: [ BillerComponent, BillerDetailComponent],
  providers:    [BillerService]
})
export class BillerModule { }
