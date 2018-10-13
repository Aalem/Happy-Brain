import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})

export class SubjectService {
    subject: any;
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerSubject(subject) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/subjects/register', subject, {headers: headers});
    }

    getSubjects() {
        return this.http.get(this.url + '/subjects/getSubjects');
    }

    deleteSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/subjects/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/subjects/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/subjects/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res)
                }, (err) => {
                    reject(err);
                });
        });
    }
}
