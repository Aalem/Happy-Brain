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
        return this.http.post('http://localhost:3000/mentor-subject/register', MentorSubject, {headers: headers});
    }


    getMentorSubjects(id) {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorSubjects/'+id);
    }

    getMentorSubjectsBySubjectId(id) {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorSubjectsBySubjectId/'+id);
    }

    getMentorBySubject() {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorsBySubject');
    }

    getMentorAllSubjects() {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorAllSubjects');
    }
    deleteMentorSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('http://localhost:3000/mentor-subject/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editMentorSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(' http://localhost:3000/mentor-subject/' + id, data)
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
            this.http.get('http://localhost:3000/mentor-subject/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
