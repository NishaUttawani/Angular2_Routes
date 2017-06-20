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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getUser(+params['id']); })
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.gotoUsers = function (user) {
        //let heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/user', { id: user.id, foo: 'foo' }]);
    };
    UserDetailComponent.prototype.editUser = function (e) {
        var _this = this;
        e.preventDefault();
        var editedUser = this.user;
        this.service.editUser(editedUser)
            .subscribe(function (user) {
            _this.user = user;
            _this.router.navigate(['/user', { id: editedUser.id, foo: 'foo' }]);
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.detail.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user.detail.component.js.map