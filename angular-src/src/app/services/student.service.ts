import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    student: any;
    authToken: any;

    constructor(private http: HttpClient) {
        // this.isDev = true;  // Change to false before deployment
    }
    registerStudent(student) {
        let headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('/students/register', student, {headers: headers});
    }
    authenticateStudent(student) {
        let headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('/students/authenticate', student, {headers: headers});
    }
    storeStudentData(token, student) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(student));
        this.authToken = token;
        this.student = student;
    }

    getStudents(){
        return this.http.get('/students/getStudents');
    }
    deleteStudent(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('/students/'+id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    editStudent(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put('/students/'+id, data)
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
            this.http.get('/students/'+id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res)
                }, (err) => {
                    reject(err);
                });
        });
    }
}
