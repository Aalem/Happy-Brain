import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class StudentSubjectService {
    StudentSubject: any;
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerStudentSubject(StudentSubject) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/student-subject/register', StudentSubject, {headers: headers});
    }

    getStudentSubjects(id) {
        return this.http.get(this.url + '/student-subject/getStudentSubjects' + id);
    }

    getAllStudentSubjects() {
        return this.http.get(this.url + '/student-subject/getAllStudentSubjects');
    }

    getStudentSubjectsInProgress() {
        return this.http.get(this.url + '/student-subject/getStudentSubjectsInProgress');
    }

    getStudentSubjectsByStudentAndMentor(ids) {
        return this.http.get(this.url + '/student-subject/getStudentSubjectsByStudentAndMentor' + ids);
    }

    getStudentSubjectsById(id) {
        return this.http.get(this.url + '/student-subject/getStudentSubjectsById/' + id);
    }

    getStudentSubjectsByMentor(id) {
        return this.http.get(this.url + '/student-subject/getStudentSubjectsByMentor' + id);
    }

    getStudentSubjectsByStudentId(id) {
        return this.http.get(this.url + '/student-subject/getStudentSubjectsByStudentId' + id);
    }

    getStudentSubjectsByMentorId(id) {
        return this.http.get(this.url + '/student-subject/getStudentSubjectsByMentorId' + id);
    }

    getUnassignedStudentSubjects() {
        return this.http.get(this.url + '/student-subject/getUnassignedStudentSubjects');
    }

    deleteStudentSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/student-subject/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editStudentSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/student-subject/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    unmatch(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/student-subject/unmatch/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getStudentSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/student-subject/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
