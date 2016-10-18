/**
 * Created by prayagupd
 * on 10/17/16.
 */

import {Component} from '@angular/core';

export class Login {
    username: string;
    password: string;
}

@Component({
    selector: 'LoginView',
    template: `
    <h1>{{title}}</h1>
    <div>
        <label>username : </label> 
        <input value="{{login.username}}"/>
    </div>
    <div>
        <label>password : </label>
        <input value="{{login.password}}" type="password"/>
    </div>
    
    <div>
        <input value="Login" type="submit"/>
    </div>
    `
})

export class LoginComponent {
    title = 'Login';
    login: Login = {
        username: "prayagupd",
        password: 'zYx'
    };
}

