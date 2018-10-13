import {Router} from '@angular/router';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';

@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.component.html',
    styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
    subjects: Object;
    subjectsArray: any;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns: string[] = ['id', 'subject', 'mentor', 'start_date', 'end_date', 'progress', 'survey', 'delete'];
    dataSource: MatTableDataSource<Object>;

    constructor(private studentSubjectService: StudentSubjectService,
                private router: Router) {
        this.isDataLoaded = false;
        this.getStudentSubject();
    }

    getStudentSubject() {
        this.dataSource = new MatTableDataSource();
        const userTypeToken = JSON.parse(localStorage.getItem('user'));
        this.subjectsArray = [];

        this.studentSubjectService.getStudentSubjectsByStudentId("/" + userTypeToken.id).subscribe(data => {
            for (const index in data) {
                this.subjectsArray.push({
                    id: Number(index) + 1,
                    _id: data[index]._id,
                    mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    start_date: data[index].start_date,
                    end_date: data[index].end_date,
                    progress: data[index].mentoringmeeting['length'] !== 0 ?
                        Math.round((data[index].mentoringmeeting[0].section / data[index].subject[0].sections) * 100) : '0',
                    teacher_assigned: data[index].teacher_assigned
                });
                console.log(data[index].mentoringmeeting['length'] !== 0 ? data[index].mentoringmeeting[0].section : '');
            }
            this.dataSource = new MatTableDataSource(this.subjectsArray);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.isDataLoaded = true;
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteSubject(row) {
        this.studentSubjectService.deleteStudentSubject(row._id).then(data => {
            this.router.navigate(['/student-dashboard']);
        });
        this.subjectsArray.splice(row.id - 1);
        this.dataSource = new MatTableDataSource(this.subjectsArray);
    }


}
