import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    student: any;
    authToken: any;
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
        // this.isDev = true;  // Change to false before deployment
    }
    registerStudent(student) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/students/register', student, {headers: headers});
    }
    authenticateStudent(student) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/students/authenticate', student, {headers: headers});
    }
    storeStudentData(token, student) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(student));
        this.authToken = token;
        this.student = student;
    }

    getStudents(){
        return this.http.get(this.url + '/students/getStudents');
    }
    deleteStudent(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/students/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    editStudent(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/students/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    getStudent(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/students/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
