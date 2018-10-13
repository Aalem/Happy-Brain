import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class LocalResService {
    LocalRes: any;
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerLocalRes(LocalRes) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/local-res/register', LocalRes, {headers: headers});
    }

    getLocalRess() {
        return this.http.get(this.url + '/local-res/getAll');
    }

    deleteLocalRes(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/local-res/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editLocalRes(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/local-res/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getLocalRes(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/local-res/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    downloadFile(file: String) {
        const body = {filename: file};

        return this.http.post(this.url + '/local-res/download', body, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    deleteFile(file: String) {
        const body = {filename: file};

        return this.http.post(this.url + '/local-res/deletefile', body, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}
