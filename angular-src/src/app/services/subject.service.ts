import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subject: any;

  constructor(private http: HttpClient) { }

    registerSubject(subject) {
        let headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('/subjects/register', subject, {headers: headers});
    }

    getSubjects(){
        return this.http.get('/subjects/getSubjects');
    }
    deleteSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('/subjects/'+id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    editSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put('/subjects/'+id, data)
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
            this.http.get('/subjects/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res)
                }, (err) => {
                    reject(err);
                });
        });
    }
    
}
