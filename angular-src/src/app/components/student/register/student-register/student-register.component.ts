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
    address: String;
    mentoring_address: String;
    volunteering: String;

    constructor(private validateService: ValidateService,
                private studentService: StudentService,
                private router: Router,
                private snackBar: MatSnackBar) {
    }


    onRegisterSubmit() {
        const student = {
            name: this.name,
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
            address: this.address,
            mentoring_address: this.mentoring_address,
            volunteering: this.volunteering
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
