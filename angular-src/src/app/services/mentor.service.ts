import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
    mentor: any;
    authToken: any;
    // url = 'http://localhost:3000';
    url: String;


    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
        // this.isDev = true;  // Change to false before deployment
    }

    registerMentor(mentor) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/mentor_subjects/register', mentor, {headers: headers});
    }
    authenticateMentor(mentor) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/mentor_subjects/authenticate', mentor, {headers: headers});
    }

    storeMentorData(token, mentor) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(mentor));
        this.authToken = token;
        this.mentor = mentor;
    }


    getMentors() {
        return this.http.get(this.url + '/mentor_subjects/getMentors');
    }
    deleteMentor(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/mentor_subjects/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    editMentor(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/mentor_subjects/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    getMentor(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/mentor_subjects/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}

