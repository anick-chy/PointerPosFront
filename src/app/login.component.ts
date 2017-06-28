import { Component } from '@angular/core';
import { Login } from './login/login';
@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    model = new Login('admin', '');
    submitted = false;

    onSubmit(){ this.submitted = true; }

    
}