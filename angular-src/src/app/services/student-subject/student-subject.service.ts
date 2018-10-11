import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentSubjectService {
    StudentSubject: any;

    constructor(private http: HttpClient) {
    }

    registerStudentSubject(StudentSubject) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('/student-subject/register', StudentSubject, {headers: headers});
    }

    getStudentSubjects(id) {
        return this.http.get('/student-subject/getStudentSubjects'+id);
    }
    getStudentSubjectsById(id) {
        return this.http.get('/student-subject/getStudentSubjectsById/'+id);
    }
    getStudentSubjectsByMentor(id) {
        return this.http.get('/student-subject/getStudentSubjectsByMentor'+id);
    }
    getStudentSubjectsByStudentId(id) {
        return this.http.get('/student-subject/getStudentSubjectsByStudentId'+id);
    }
    getStudentSubjectsByMentorId(id) {
        return this.http.get('/student-subject/getStudentSubjectsByMentorId'+id);
    }
    getUnassignedStudentSubjects() {
        return this.http.get('/student-subject/getUnassignedStudentSubjects');
    }

    deleteStudentSubject(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('/student-subject/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editStudentSubject(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put('/student-subject/' + id, data)
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
            this.http.get('/student-subject/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
