import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Admin Section</h1>
              <nav>
               <a routerLink="/user" routerLinkActive="active">User Details</a>
               <a routerLink="/biller" routerLinkActive="active">Biller Details</a>
              </nav>
              <router-outlet></router-outlet>`

})
export class AdminComponent  {
 }
