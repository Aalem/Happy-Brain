import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../../../services/validate.service';
import {StudentService} from '../../../../services/student.service';
import {MatRadioChange, MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
    name: String;
    last_name: String;
    age: String;
    dob: String;
    parents_name: String;
    about_yourself: String;
    about_us: String;
    subjects: String;
    online_tutoring: String;
    password: String;
    email: String;
    phone: String;
    parents_phone: String;
    country: String;
    language: String;
    school_level: String;
    school_name: String;
    family_situation: String;
    english_level: String;
    tutor_gender: String;
    gender: String;
    cm_name: String;
    cm_phone: String;
    cm_email: String;
    address: String;
    mentoring_address: String;

    constructor(private validateService: ValidateService,
                private studentService: StudentService,
                private router: Router,
                private snackBar: MatSnackBar) {
    }


    onRegisterSubmit() {
        const student = {
            name: this.name,
            last_name: this.last_name,
            age: this.age,
            dob: this.dob,
            parents_name: this.parents_name,
            about_yourself: this.about_yourself,
            about_us: this.about_us,
            subjects: this.subjects,
            online_tutoring: this.online_tutoring,
            email: this.email,
            password: this.password,
            phone: this.phone,
            parents_phone: this.parents_phone,
            country: this.country,
            language: this.language,
            school_level: this.school_level,
            school_name: this.school_name,
            family_situation: this.family_situation,
            english_level: this.english_level,
            tutor_gender: this.tutor_gender,
            gender: this.gender,
            cm_name: this.cm_name,
            cm_phone: this.cm_phone,
            cm_email: this.cm_email,
            address: this.address,
            mentoring_address: this.mentoring_address
        }

        // Required Fields
        if (!this.validateService.validateRegister(student)) {
            this.snackBar.open('Please fill in all fields', null, {duration: 3000});

            return false;
        }

        // Validate Email
        if (!this.validateService.validateEmail(student.email)) {
            this.snackBar.open('Please use a valid email', null, {duration: 3000});

            return false;
        }

        // Register user
        this.studentService.registerStudent(student).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('You are now registered and can now login', null, {duration: 3000});
                this.router.navigate(['/login']);
            } else {
                this.snackBar.open('Something went wrong', null, {duration: 3000});
                this.router.navigate(['/register']);
            }
        });
    }

    onChange(mrChange: MatRadioChange) {
        if (mrChange.source.name === 'tutor_gender') {
            this.tutor_gender = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.gender = mrChange.source.value;
        }
    }

}
