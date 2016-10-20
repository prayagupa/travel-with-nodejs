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
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
    title = 'Login';

    onSubmit() {
        var user : Login = {
            username: 'pra',
            password: 'yag'
        }

        console.dir(user)
    }
}

