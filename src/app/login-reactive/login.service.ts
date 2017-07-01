import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LoginData } from './data-model';

@Injectable()
export class LoginService{
    private loginUrl = 'api/users';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){

    }

    Login(loginData: LoginData): Promise<LoginData>{
        return this.http
        .post(this.loginUrl, JSON.stringify({userName: loginData.userName}), this.headers)
        .toPromise()
        //.then(res => res.json().data as LoginData)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}