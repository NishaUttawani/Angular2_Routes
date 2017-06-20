import { Component, OnInit } from '@angular/core';
import {BillerService, Biller} from './biller.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'biller.component.html'
})
export class BillerComponent{
  billers: Biller[];
  billerName : string;
  billerType: string;
  officeAddress={
    email: "",
    streetAdress:"",
    zipCode:0,
    city: "",
    country: "",
    phone: 0,
  };
  id : number;
  selectedId: number;


  constructor(
    private service: BillerService,
    private route: ActivatedRoute,
    private router: Router){  }

  ngOnInit(){
      this.route.params.subscribe(params=>{
        this.selectedId= +params['id']

      });

      this.officeAddress.phone=null;
      this.officeAddress.zipCode=null;
      
      this.service.getBillers()
        .subscribe((billers)=>{
          this.billers=billers;
        })
  }

  addBiller(e: Event){
    e.preventDefault();
    if(this.billers.length != 0){
      var index= this.billers.length-1;
       this.id= (this.billers[index].id)+1;
    }
    else{
      this.id= 1;
    }

     var newBiller:Biller = {
        id: this.id,
        billerName: this.billerName,
        billerType: this.billerType,
        officeAddress:this.officeAddress

     }
     this.service.addBiller(newBiller)
     .subscribe( biller=>{
       this.billers.push(biller);
     });

  } //end of addBiller()

  onSelect(biller:Biller){
    this.router.navigate(['/biller', biller.id])
  }

  isSelected(biller: Biller) {
     return biller.id === this.selectedId;
   }
}
