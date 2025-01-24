import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

    private _token: string = null;
    private _user: string = '';

    constructor(private router: Router) { 
        console.log("STORAGE USER", this._token);
        this._user = localStorage.getItem('user_uoc') || '';
        this._token = localStorage.getItem('token_uoc') || null;
    }

    set token(token: string) {
        this._token = token;
        localStorage.setItem('token_uoc', this._token);
    }

    get token() {
        return this._token;
    }

    set user(user: string) {
        this._user = user;
        localStorage.setItem('user_uoc', this._user);
    }

    get user() {
        return this._user;
    }

    isLoggedIn() {
        return this.token != null;
    }

    isLoggedOut() {
        this.token = null;
        this.user = '';
        this.router.navigate(['login']);
        //localStorage.removeItem('user_uoc');
        //localStorage.removeItem('token_uoc');
    }
}
