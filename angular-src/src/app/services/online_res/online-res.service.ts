import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class OnlineResService {
    OnlineRes: any;
    url: String;

    constructor(private http: HttpClient,
                private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerOnlineRes(OnlineRes) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/online-res/register', OnlineRes, {headers: headers});
    }

    getOnlineRess() {
        return this.http.get(this.url + '/online-res/getAll');
    }

    deleteOnlineRes(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/online-res/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editOnlineRes(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/online-res/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getOnlineRes(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/online-res/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
