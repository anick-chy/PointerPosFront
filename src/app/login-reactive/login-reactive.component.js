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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var login_service_1 = require('./login.service');
var LoginReactiveComponent = (function () {
    function LoginReactiveComponent(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
        this.createForm();
    }
    LoginReactiveComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginReactiveComponent.prototype.Login = function () {
        this.loginData = this.prepareLoginData();
        this.loginService.Login(this.loginData)
            .then(function (data) {
            console.log(data);
        });
    };
    LoginReactiveComponent.prototype.prepareLoginData = function () {
        var formModel = this.loginForm.value;
        var lData = {
            userName: formModel.userName,
            password: formModel.password
        };
        return lData;
    };
    LoginReactiveComponent = __decorate([
        core_1.Component({
            selector: 'login-reactive',
            templateUrl: './login-reactive.component.html',
            styleUrls: ['./login-reactive.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, login_service_1.LoginService])
    ], LoginReactiveComponent);
    return LoginReactiveComponent;
}());
exports.LoginReactiveComponent = LoginReactiveComponent;
//# sourceMappingURL=login-reactive.component.js.map