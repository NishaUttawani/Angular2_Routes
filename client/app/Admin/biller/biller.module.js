"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var biller_routing_module_1 = require("./biller.routing.module");
var biller_service_1 = require("./biller.service");
var biller_component_1 = require("./biller.component");
var biller_detail_component_1 = require("./biller.detail.component");
var BillerModule = (function () {
    function BillerModule() {
    }
    return BillerModule;
}());
BillerModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, biller_routing_module_1.BillerRoutingModule],
        declarations: [biller_component_1.BillerComponent, biller_detail_component_1.BillerDetailComponent],
        providers: [biller_service_1.BillerService]
    })
], BillerModule);
exports.BillerModule = BillerModule;
//# sourceMappingURL=biller.module.js.map