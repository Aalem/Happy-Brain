import {StudentSubjectService} from '../../../../services/student-subject/student-subject.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
    selector: 'app-mentor-dashboard',
    templateUrl: './mentor-dashboard.component.html',
    styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent {
    subjectsArray: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'subject', 'student', 'start_date', 'end_date', 'progress', 'mentoring_meeting'];
    dataSource: MatTableDataSource<Object>;

    constructor(private studentSubjectService: StudentSubjectService,
                private router: Router) {
        const userTypeToken = JSON.parse(localStorage.getItem('user'));
        this.subjectsArray = [];

        this.studentSubjectService.getStudentSubjectsByMentorId('/' + userTypeToken.id)
            .subscribe(data => {
                for (const index in data) {
                    this.subjectsArray.push({
                        id: Number(index),
                        _id: data[index]._id,
                        student: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                        subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                        start_date: data[index].start_date,
                        end_date: data[index].end_date,
                        progress: data[index].mentoringmeeting['length'] !== 0 ?
                            Math.round((data[index].mentoringmeeting[0].section / data[index].subject[0].sections) * 100) : '0',
                    });
                }
                this.dataSource = new MatTableDataSource(this.subjectsArray);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });

    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


}
