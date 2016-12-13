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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "config", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'coreui-header',
        template: "\n    <header class=\"navbar\">\n      <div class=\"container-fluid\">\n        <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" mobile-nav-toggle>&#9776;</button>\n        <a class=\"navbar-brand\" href=\"#\"></a>\n    \n        <ul class=\"nav navbar-nav hidden-md-down\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link navbar-toggler sidebar-toggle\" href=\"#\">&#9776;</a>\n          </li>\n          <li class=\"nav-item px-1\" *ngFor=\"let nav of config.nav\">\n            <i class=\"{{nav.icon}}\"></i>\n            <a class=\"nav-link\"\n               routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact: true}\"\n               [routerLink]=\"nav.link\">{{nav.label}}</a>\n          </li>\n        </ul>\n        \n        <ul class=\"nav navbar-nav float-xs-right hidden-md-down\">\n          <li class=\"nav-item dropdown px-1\" dropdown>\n            <a class=\"nav-link dropdown-toggle\"\n               data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\n              \n              <span class=\"hidden-md-down\">admin</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n              <div class=\"dropdown-header text-xs-center\">\n                <strong>Settings</strong>\n              </div>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n              <div class=\"divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n            </div>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"config.aside\">\n            <a class=\"nav-link navbar-toggler aside-toggle\" href=\"#\">&#9776;</a>\n          </li>\n        </ul>\n      </div>\n    </header>\n",
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map