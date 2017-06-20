"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var biller_service_1 = require("./biller.service");
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var BillerComponent = (function () {
    function BillerComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.officeAddress = {
            email: "",
            streetAdress: "",
            zipCode: 0,
            city: "",
            country: "",
            phone: 0,
        };
    }
    BillerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedId = +params['id'];
        });
        this.officeAddress.phone = null;
        this.officeAddress.zipCode = null;
        this.service.getBillers()
            .subscribe(function (billers) {
            _this.billers = billers;
        });
    };
    BillerComponent.prototype.addBiller = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.billers.length != 0) {
            var index = this.billers.length - 1;
            this.id = (this.billers[index].id) + 1;
        }
        else {
            this.id = 1;
        }
        var newBiller = {
            id: this.id,
            billerName: this.billerName,
            billerType: this.billerType,
            officeAddress: this.officeAddress
        };
        this.service.addBiller(newBiller)
            .subscribe(function (biller) {
            _this.billers.push(biller);
        });
    }; //end of addBiller()
    BillerComponent.prototype.onSelect = function (biller) {
        this.router.navigate(['/biller', biller.id]);
    };
    BillerComponent.prototype.isSelected = function (biller) {
        return biller.id === this.selectedId;
    };
    return BillerComponent;
}());
BillerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'biller.component.html'
    }),
    __metadata("design:paramtypes", [biller_service_1.BillerService,
        router_1.ActivatedRoute,
        router_1.Router])
], BillerComponent);
exports.BillerComponent = BillerComponent;
//# sourceMappingURL=biller.component.js.map