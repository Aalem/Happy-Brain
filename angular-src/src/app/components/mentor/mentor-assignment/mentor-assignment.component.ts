import {Component, OnInit, ViewChild} from '@angular/core';
import {MentorSubjectService} from '../../../services/mentor-subject/mentor-subject.service';
import {MentorService} from '../../../services/mentor.service';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';
import {Router} from '@angular/router';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';


@Component({
    selector: 'app-mentor-assignment',
    templateUrl: './mentor-assignment.component.html',
    styleUrls: ['./mentor-assignment.component.css']
})
export class MentorAssignmentComponent implements OnInit {
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

    i = 0;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private mentorSubjectService: MentorSubjectService,
                private mentorService: MentorService,
                private router: Router,
                private studentSubjectService: StudentSubjectService,
                private snackBar: MatSnackBar) {
        this.isDataLoaded = false;

        this.student = JSON.parse(localStorage.getItem('assignment_data')).student;
        this.subject = JSON.parse(localStorage.getItem('assignment_data')).subject;
        this.student_subject_id = JSON.parse(localStorage.getItem('assignment_data'))._id;
        this.mentors = [];

        this.mentorSubjectService.getMentorSubjectsBySubjectId(this.subject._id).subscribe(data => {
            this.subject_mentors = data;
                this.mentor_data = [];
                if (data['length'] !== 0) {
                    this.getMentors(this.subject_mentors);

                }

            }
        );

    }

    getMentors(mentor) {
        this.mentorService.getMentor(this.subject_mentors[this.i].mentor_id).then((mentor_data) => {
            this.mentors.push({
                id: this.i,
                _id: mentor_data['_id'],
                name: mentor_data['name'],
                phone: mentor_data['phone'],
                location: mentor_data['location'],
                starting_date: mentor_data['starting_date']
            });

            this.i++;
            if (this.subject_mentors['length'] > this.i) {
                this.getMentors(this.mentors);
            } else {
                this.dataSource = new MatTableDataSource(this.mentors);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.isDataLoaded = true;
            }
        }, (err) => {
            console.log(err);
        });
    }


    ngOnInit() {
        this.today = new Date().toISOString().split('T')[0];

    }

    onAssignMentor(mentor_id) {
        const student_subject = {
            mentor_id: mentor_id,
            start_date: this.today,
            teacher_assigned: true
        };
        this.studentSubjectService.editStudentSubject(this.student_subject_id, student_subject).then((result) => {
            this.router.navigate(['/dashboard']);
            this.snackBar.open('Mentor assigned', null, {duration: 1500});

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

}
