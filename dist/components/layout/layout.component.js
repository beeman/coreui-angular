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
var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    return LayoutComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LayoutComponent.prototype, "config", void 0);
LayoutComponent = __decorate([
    core_1.Component({
        selector: 'coreui-layout',
        template: "\n    <coreui-header  [config]=\"config.header\">   </coreui-header>\n    <coreui-sidebar [config]=\"config.sidebar\">  </coreui-sidebar>\n    <coreui-main    [config]=\"config.main\">\n      <ng-content></ng-content>\n    </coreui-main>\n    <coreui-footer  [config]=\"config.footer\">   </coreui-footer>\n",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.component.js.map