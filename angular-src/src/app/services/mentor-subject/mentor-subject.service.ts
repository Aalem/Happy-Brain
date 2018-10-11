import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorSubjectService {
    MentorSubject: any;

    constructor(private http: HttpClient) {
    }

    registerMentorSubject(MentorSubject) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('/mentor-subject/register', MentorSubject, {headers: headers});
    }


    getMentorSubjects(id) {
        return this.http.get('/mentor-subject/getMentorSubjects/'+id);
    }

    getMentorSubjectsBySubjectId(id) {
        return this.http.get('/mentor-subject/getMentorSubjectsBySubjectId/'+id);
    }

    getMentorBySubject() {
        return this.http.get('/mentor-subject/getMentorsBySubject');
    }

    getMentorAllSubjects() {
        return this.http.get('/mentor-subject/getMentorAllSubjects');
    }
    deleteMentorSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('/mentor-subject/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editMentorSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put('/mentor-subject/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getMentorSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/mentor-subject/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
