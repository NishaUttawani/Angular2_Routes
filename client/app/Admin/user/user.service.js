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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var User = (function () {
    function User(id, name, address, dob, phone, email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
    }
    return User;
}());
exports.User = User;
/*let USERS=[
  new User(1, 'John'),
  new User(2, 'Bob'),
  new User(3, 'George')
];

let usersPromise = Promise.resolve(USERS);*/
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (newUser) {
        console.log(newUser);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (id) {
        var obj = { "id": id };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user/', JSON.stringify(obj), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (editedUser) {
        console.log(editedUser);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/edituser', JSON.stringify(editedUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map