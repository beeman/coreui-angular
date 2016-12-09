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
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "config", void 0);
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'coreui-sidebar',
        template: "\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li *ngFor=\"let nav of config.nav\" class=\"nav-{{nav.type}}\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=nav.link [routerLinkActiveOptions]=\"{exact: true}\">\n            <i *ngIf=\"nav.icon\" class=\"{{nav.icon}}\"></i>\n            {{nav.label}}\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map