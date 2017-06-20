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
var user_service_1 = require("./user.service");
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedId = +params['id'];
        });
        this.service.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UserComponent.prototype.addUser = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.users.length != 0) {
            var index = this.users.length - 1;
            this.id = (this.users[index].id) + 1;
        }
        else {
            this.id = 1;
        }
        var newUser = {
            name: this.name,
            id: this.id,
            dob: this.dob,
            phone: this.phone,
            email: this.email,
            address: this.address
        };
        this.service.addUser(newUser)
            .subscribe(function (user) {
            _this.users.push(user);
        });
    }; //end of addUser()
    UserComponent.prototype.onSelect = function (user) {
        this.router.navigate(['/user', user.id]);
    };
    UserComponent.prototype.isSelected = function (user) {
        return user.id === this.selectedId;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map