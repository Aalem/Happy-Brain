import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';
import {MentoringMeetingService} from '../../../services/mentoring-meeting/mentoring-meeting.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-create-mentoring-meeting',
    templateUrl: './create-mentoring-meeting.component.html',
    styleUrls: ['./create-mentoring-meeting.component.css']
})
export class CreateMentoringMeetingComponent {
    studentSubject: any;
    date: any;
    session: any;
    duration: any;
    comment: any;
    // section: any;
    subject: any;
    sectinos: any;
    student: any;

    constructor(private activatedRoute: ActivatedRoute,
                private snackBar: MatSnackBar,
                private router: Router,
                private mentoringMeetingService: MentoringMeetingService,
                private studentSubjectService: StudentSubjectService) {
        this.session = 0;

        this.studentSubjectService.getStudentSubjectsById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
            this.studentSubject = data;
            this.subject = this.studentSubject[0].subject[0].name;
            // this.sectinos = this.studentSubject[0].subject[0].section;
            this.student = this.studentSubject[0].student[0].name;

        });

        this.mentoringMeetingService.countMentoringMeetingById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
            this.session = Number(data) + 1;

            console.log(this.session);
        });

    }

    onSubmit() {

        const mentoring_meeting = {
            student_subject: this.studentSubject[0]._id,
            date: this.date,
            // section: this.section,
            session: this.session,
            duration: this.duration,
            comment: this.comment
        };
        this.mentoringMeetingService.registerMentoringMeeting(mentoring_meeting).subscribe(data => {
            // console.log(mentoring_meeting);
            if (data['success']) {
                this.snackBar.open('Mentoring meeting recorded', null, {duration: 1500});
                this.router.navigate(['/mentor-dashboard']);
            } else {
                this.snackBar.open('Something went wrong', 'Dismiss', {duration: 2000});
            }
        });
    }


}
