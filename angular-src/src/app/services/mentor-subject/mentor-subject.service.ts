import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class MentorSubjectService {
    MentorSubject: any;
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerMentorSubject(MentorSubject) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/mentor-subject/register', MentorSubject, {headers: headers});
    }


    getMentorSubjects(id) {
        return this.http.get(this.url + '/mentor-subject/getMentorSubjects/'+id);
    }

    getMentorSubjectsBySubjectId(id) {
        return this.http.get(this.url + '/mentor-subject/getMentorSubjectsBySubjectId/'+id);
    }

    getMentorBySubject() {
        return this.http.get(this.url + '/mentor-subject/getMentorsBySubject');
    }

    getMentorAllSubjects() {
        return this.http.get(this.url + '/mentor-subject/getMentorAllSubjects');
    }
    deleteMentorSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/mentor-subject/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editMentorSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/mentor-subject/' + id, data)
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
            this.http.get(this.url + '/mentor-subject/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
