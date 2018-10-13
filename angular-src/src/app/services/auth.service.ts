import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tokenGetter} from '../app.module';
import {ConfigService} from './config.service';

@Injectable()
export class AuthService {
    authToken: any;
    helper = new JwtHelperService();
    url: String;


    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.helper.isTokenExpired(token);
    }

    getProfile() {

        this.loadToken();
        const headers = new HttpHeaders({'Authorization': this.authToken, 'Content-Type': 'application/json'});
        const userTypeToken = JSON.parse(localStorage.getItem('user'));
        if (userTypeToken.type === 'mentor') {
            return this.http.get(this.url + '/mentor_subjects/profile', {headers: headers});
        } else if (userTypeToken.type === 'student') {
            return this.http.get(this.url + '/students/profile', {headers: headers});
        } else if (userTypeToken.type === 'admin') {
            return this.http.get(this.url + '/admins/dashboard', {headers: headers});
        }

    }

    getUserType() {
        const userTypeToken = JSON.parse(localStorage.getItem('user'));
        if (userTypeToken !== null) {
            return userTypeToken.type;
        }
        return null;
    }


    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loggedIn() {
        const refreshToken = tokenGetter();
        if (!this.helper.isTokenExpired(refreshToken)) {
            return true;
        }
    }

    logout() {
        this.authToken = null;
        localStorage.clear();
    }
}
