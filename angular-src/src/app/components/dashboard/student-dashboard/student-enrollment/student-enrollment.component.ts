import {Component} from '@angular/core';
import {SubjectService} from '../../../../services/subject.service';
import {Router} from '@angular/router';
import {StudentSubjectService} from '../../../../services/student-subject/student-subject.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-student-enrollment',
    templateUrl: './student-enrollment.component.html',
    styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent {
    subjects: Object;
    subject_id: String;
    user: Object;

    constructor(private subjectService: SubjectService, private studentSubjectService: StudentSubjectService,
                private snackBar: MatSnackBar,
                private router: Router) {
        this.subjectService.getSubjects()
            .subscribe(subjects => {
                this.subjects = subjects;
            });
    }

    onRegisterSubmit() {

        const subject = {
            subject_id: this.subject_id,
            student_id: JSON.parse(localStorage.getItem('user')).id
        };

        this.studentSubjectService.registerStudentSubject(subject).subscribe(data => {
            if (data['success']) {
                this.router.navigate(['/student-dashboard']);
                this.snackBar.open('New subject selected!', null, {duration: 2000});

            } else {
                this.snackBar.open('Something went wrong!', null, {duration: 2000});

            }
        });
    }

}
