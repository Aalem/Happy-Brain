import {Component, OnInit, ViewChild} from '@angular/core';
import {MentorSubjectService} from '../../../services/mentor-subject/mentor-subject.service';
import {MentorService} from '../../../services/mentor.service';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';
import {Router} from '@angular/router';
import {
    MatDatepickerInputEvent,
    MatDialog,
    MatPaginator,
    MatSnackBar,
    MatSort,
    MatTableDataSource
} from '@angular/material';
import {MentorDetailsComponent} from '../details/mentor-details.component';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../../services/config.service";
import {MessageService} from "../../../services/messages/message.service";


@Component({
    selector: 'app-mentor-assignment',
    templateUrl: './mentor-assignment.component.html',
    styleUrls: ['./mentor-assignment.component.css']
})
export class MentorAssignmentComponent {
    displayedColumns: string[] = ['id', 'name', 'phone', 'location', 'starting_date', 'assign'];
    dataSource: MatTableDataSource<Object>;
    student: any;
    subject: any;
    subject_id: any;
    mentor_data: any;
    subject_mentors: any;
    student_subject_id: any;
    today: any;
    mentor_id: String;
    mentors: any;
    isDataLoaded: boolean;
    filterAssignedMentors = true;

    isNoMentor: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    url: any;

    constructor(private configService: ConfigService,
        private mentorSubjectService: MentorSubjectService,
                private httpClient: HttpClient,
                private mentorService: MentorService,
                private matDialog: MatDialog,
                private messageService: MessageService,
                private router: Router,
                private studentSubjectService: StudentSubjectService,
                private snackBar: MatSnackBar) {
        this.isDataLoaded = false;
        this.isNoMentor = false;
        this.url = configService.getUrl();

        this.student = JSON.parse(localStorage.getItem('assignment_data')).student;
        this.subject = JSON.parse(localStorage.getItem('assignment_data')).subject;
        this.student_subject_id = JSON.parse(localStorage.getItem('assignment_data'))._id;
        this.mentors = [];
        this.mentorSubjectService.getMentorSubjectsBySubjectId(this.subject._id).subscribe(data => {
                this.subject_mentors = data;
                this.mentor_data = [];
                if (data['length'] !== 0) {
                    this.getMentors(this.subject_mentors);
                } else {
                    this.isNoMentor = true;
                    this.isDataLoaded = true;
                }
            }
        );

    }

    reloadMentors() {
        this.filterAssignedMentors = !this.filterAssignedMentors;
        this.mentors = [];
        this.dataSource = new MatTableDataSource;
        this.getMentors(this.subject_mentors);
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.today = event.value.toISOString().split('T')[0];
    }

    getMentors(mentor) {
        for (let curMentor in mentor) {

            this.mentorService.getMentor(mentor[curMentor].mentor_id).then((mentor_data) => {
                if (mentor_data != null) {
                    if (this.filterAssignedMentors) {
                        if (!mentor_data['assigned']) {
                            this.mentors.push({
                                id: Number(curMentor) + 1,
                                _id: mentor_data['_id'],
                                name: mentor_data['name'],
                                phone: mentor_data['phone'],
                                location: mentor_data['location'],
                                starting_date: mentor_data['starting_date'],
                                mentor_data: mentor_data
                            });
                        }
                    } else {
                        this.mentors.push({
                            id: Number(curMentor) + 1,
                            _id: mentor_data['_id'],
                            name: mentor_data['name'],
                            phone: mentor_data['phone'],
                            location: mentor_data['location'],
                            starting_date: mentor_data['starting_date'],
                            mentor_data: mentor_data
                        });
                    }
                }
            }, (err) => {
                console.log(err);
            }).then(d => {
                if (Number(curMentor) === mentor.length - 1) {
                    this.dataSource = new MatTableDataSource(this.mentors);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.isDataLoaded = true;
                }
            });
        }

    }

    onAssignMentor(mentor_id, m_email) {
        const student_subject = {
            mentor_id: mentor_id,
            start_date: this.today,
            teacher_assigned: true,
            status: 'in_progress'
        };
        const mentor = {
            assigned: true
        };
        this.mentorService.editMentor(mentor_id, mentor);
        this.studentSubjectService.editStudentSubject(this.student_subject_id, student_subject).then((result) => {
            this.router.navigate(['/dashboard']);

            // this.httpClient.post(this.url + '/send-email', {
            //     s_email: this.student.email,
            //     m_email: m_email,
            //     c_email: this.student.cm_email
            // }).subscribe((val) => {
            //
            // });

            this.snackBar.open('Mentor assigned', null, {duration: 1500});
            this.messageService.sendNotification({
                title: 'Class Notification',
                message: 'Your ' + this.subject.name + ' class starts on ' + student_subject.start_date,
                user: this.student._id
            }).subscribe(d=> {});

            this.messageService.sendNotification({
                title: 'Class Notification',
                message: 'Your ' + this.subject.name + ' class starts on ' + student_subject.start_date,
                user: mentor_id
            }).subscribe(d=> {});

        }, (err) => {
            console.log(err);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog(mentor) {
        const dialogRef = this.matDialog.open(MentorDetailsComponent, {data: mentor});

        dialogRef.afterClosed().subscribe(result => {
        });
    }

}
