import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Bill Payment</h1>
              <nav>
               <a routerLink="/admin" routerLinkActive="active">Admin </a>
               <a>User</a>
              </nav>
              <router-outlet></router-outlet>`

})
export class AppComponent  {
 }
