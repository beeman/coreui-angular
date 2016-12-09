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
var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MainComponent.prototype, "config", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'coreui-main',
        template: "\n  <!-- Main content -->\n  <main class=\"main\">\n  \n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\" *ngIf=\"config.breadcrumbs\">\n      <coreui-breadcrumbs></coreui-breadcrumbs>\n  \n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu\" *ngIf=\"config.nav\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n          <a *ngFor=\"let nav of config.nav\" class=\"btn btn-secondary\" [routerLinkActiveOptions]=\"{exact: true}\"\n            routerLinkActive=\"active\" [routerLink]=\"nav.link\">\n            <i *ngIf=\"nav.icon\" class=\"{{nav.icon}}\"></i>\n            {{nav.label}}\n          </a>\n        </div>\n      </li>\n    </ol>\n  \n    <div class=\"container-fluid\">\n      <ng-content></ng-content>\n    </div>\n\n  </main>\n  <aside class=\"aside-menu\">\n    \n  </aside>\n  ",
    }),
    __metadata("design:paramtypes", [])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map