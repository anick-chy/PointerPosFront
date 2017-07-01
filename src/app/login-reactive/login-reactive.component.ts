import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginData } from './data-model';
import { LoginService } from './login.service';

@Component({
    selector: 'login-reactive',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent{
    loginForm: FormGroup;
    loginData: LoginData;

    constructor(private fb: FormBuilder, private loginService: LoginService){
        this.createForm();
    }

    createForm(){
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    Login(){
        this.loginData = this.prepareLoginData();
        this.loginService.Login(this.loginData)
        .then(data => {
            console.log(data);
        })
    }

    prepareLoginData(): LoginData{
        const formModel = this.loginForm.value;

        const lData: LoginData = {
            userName: formModel.userName,
            password: formModel.password
        };

        return lData;
    }
}