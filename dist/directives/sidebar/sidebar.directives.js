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
/**
 * Allows the sidebar to be toggled via click.
 */
var SidebarToggleDirective = SidebarToggleDirective_1 = (function () {
    function SidebarToggleDirective() {
    }
    // Check if element has class
    SidebarToggleDirective.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarToggleDirective.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (SidebarToggleDirective_1.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var bodyClass = localStorage.getItem('body-class');
        if (SidebarToggleDirective_1.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            SidebarToggleDirective_1.toggleClass(document.querySelector('body'), 'sidebar-opened');
            SidebarToggleDirective_1.toggleClass(document.querySelector('html'), 'sidebar-opened');
        }
        else if (SidebarToggleDirective_1.hasClass(document.querySelector('body'), 'sidebar-nav') || bodyClass === 'sidebar-nav') {
            SidebarToggleDirective_1.toggleClass(document.querySelector('body'), 'sidebar-nav');
            localStorage.setItem('body-class', 'sidebar-nav');
            if (bodyClass === 'sidebar-nav') {
                localStorage.clear();
            }
        }
    };
    return SidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = SidebarToggleDirective_1 = __decorate([
    core_1.Directive({
        selector: '.sidebar-toggle',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);
exports.SidebarToggleDirective = SidebarToggleDirective;
var MobileSidebarToggleDirective = MobileSidebarToggleDirective_1 = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    MobileSidebarToggleDirective.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (MobileSidebarToggleDirective_1.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        MobileSidebarToggleDirective_1.toggleClass(document.querySelector('body'), 'mobile-open');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = MobileSidebarToggleDirective_1 = __decorate([
    core_1.Directive({
        selector: '[mobile-nav-toggle]',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective_1 = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (SidebarOffCanvasCloseDirective_1.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (SidebarOffCanvasCloseDirective_1.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            SidebarOffCanvasCloseDirective_1.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective_1 = __decorate([
    core_1.Directive({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
var SidebarToggleDirective_1, MobileSidebarToggleDirective_1, SidebarOffCanvasCloseDirective_1;
//# sourceMappingURL=sidebar.directives.js.map