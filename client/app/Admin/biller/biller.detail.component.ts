import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Biller, BillerService }  from './biller.service';

@Component({
  moduleId: module.id,
  templateUrl: 'biller.detail.component.html',
})
export class BillerDetailComponent implements OnInit {

  biller: Biller;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BillerService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getBiller(+params['id']))
      .subscribe((biller: Biller) => this.biller = biller);


  }

  gotoBillers() {
    //let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/biller', { id: this.biller.id, foo: 'foo' }]);
  }

  editBiller(e:Event){
    e.preventDefault();
    var editedBiller:Biller =this.biller;
    this.service.editBiller(editedBiller)
      .subscribe( biller=>{
        this.biller = biller;
        this.router.navigate(['/biller', { id: editedBiller.id, foo: 'foo' }]);
      });

  }
}
