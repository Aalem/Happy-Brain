import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student.service';
import {MentorService} from '../../services/mentor.service';
import {AdminService} from '../../services/admin.service';
import {MatSnackBar} from '@angular/material';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: String;
    password: String;
    type: String;

    constructor(
                private studentService: StudentService,
                private mentorService: MentorService,
                private adminService: AdminService,
                private router: Router,
                private snackBar: MatSnackBar) {
        this.type = 'admin';
    }


    onLoginSubmit() {
        const user = {
            email: this.email,
            password: this.password
        };
        if (this.type === 'mentor') {
            this.mentorService.authenticateMentor(user).subscribe(data => {
                if (data['success']) {
                    this.mentorService.storeMentorData(data['token'], data['mentor']);
                    this.router.navigate(['mentor-dashboard']);
                } else {
                    this.snackBar.open('Login Failed', 'Dismiss', {duration: 2000});
                    this.router.navigate(['login']);
                }
            });
        } else if (this.type === 'student') {
            this.studentService.authenticateStudent(user).subscribe(data => {
                if (data['success']) {
                    this.studentService.storeStudentData(data['token'], data['student']);
                    this.router.navigate(['student-dashboard']);
                } else {
                    this.router.navigate(['login']);
                    this.snackBar.open('Login Failed', 'Dismiss', {duration: 2000});
                }
            });
        } else if (this.type === 'admin') {
            this.adminService.authenticateAdmin(user).subscribe(data => {
                if (data['success']) {
                    this.adminService.storeAdminData(data['token'], data['admin']);
                    this.router.navigate(['dashboard']);
                } else {
                    this.snackBar.open('Login Failed', 'Dismiss', {duration: 2000});
                    this.router.navigate(['login']);
                }
            });
        }

    }

}
