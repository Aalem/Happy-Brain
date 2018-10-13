import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    authToken: any;
    admin: any;
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
        // this.isDev = true;  // Change to false before deployment
    }

    registerAdmin(admin) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/admins/register', admin, {headers: headers});
    }
    authenticateAdmin(admin) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/admins/authenticate', admin, {headers: headers});
    }

    storeAdminData(token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    }

    getAdmins() {
        return this.http.get(this.url + '/admins/getAdmins');
    }
    deleteAdmin(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/admins/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    editAdmin(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/admins/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAdmin(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/admins/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
