import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';
import {MatSnackBar} from '@angular/material';
import {SurveyService} from '../../../services/survey/survey.service';

@Component({
    selector: 'app-create-survey',
    templateUrl: './create-survey.component.html',
    styleUrls: ['./create-survey.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CreateSurveyComponent implements OnInit {
    @Input('rating') rating: number;
    @Input('starCount') starCount: number;
    @Input('color') starColor: string;

    studentSubject: any;
    date: any;
    mydate: any;
    comment: any;
    mentor: any;
    student: any;
    subject: any;
    isDataLoaded: boolean;

    constructor(private activatedRoute: ActivatedRoute,
                private snackBar: MatSnackBar,
                private router: Router,
                private surveySerive: SurveyService,
                private studentSubjectService: StudentSubjectService) {
        this.isDataLoaded = false;
        this.studentSubjectService.getStudentSubjectsById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
            this.studentSubject = data;
            this.subject = this.studentSubject[0].subject[0];
            this.mentor = this.studentSubject[0].mentor[0];
            this.student = this.studentSubject[0].student[0];
            this.isDataLoaded = true;
        });

    }

    ngOnInit() {
        this.starCount = 5;
        this.starColor = StarRatingColor.accent;
    }

    onRatingChanged(rating) {
        this.rating = rating;
    }

    onSubmit() {
        const survey = {
            student_subject: this.studentSubject[0]._id,
            student_id: this.student._id,
            mentor_id: this.mentor._id,
            subject_id: this.subject._id,
            date: this.date,
            comment: this.comment,
            rating: this.rating
        };
        this.surveySerive.registerSurvey(survey).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('Thank you for the feedback!', null, {duration: 1500});
                this.router.navigate(['/student-dashboard']);
            } else {
                this.snackBar.open('Please make sure you have filled the required fields and rated your mentor', 'Dismiss', {duration: 3000});
            }
        });
    }


}


export enum StarRatingColor {
    primary = 'primary',
    accent = 'accent',
    warn = 'warn'
}
