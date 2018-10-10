import {StudentSubjectService} from '../../services/student-subject/student-subject.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    displayedColumns: string[] = ['id', 'name', 'phone', 'country', 'subject', 'assign'];
    dataSource: MatTableDataSource<Object>;

    subjectsArray: any;
    hasStudents: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private router: Router,
                private studentSubjectService: StudentSubjectService) {
        this.hasStudents = true;
        this.subjectsArray = [];
        this.studentSubjectService.getUnassignedStudentSubjects()
            .subscribe(data => {
                if (data['length'] == 0) {
                    this.hasStudents = false;
                }
                for (const index in data) {
                    this.subjectsArray.push({
                        id: Number(index),
                        _id: data[index]._id,
                        name: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                        phone: data[index].student['length'] !== 0 ? data[index].student[0].phone : '',
                        country: data[index].student['length'] !== 0 ? data[index].student[0].country : '',
                        subject_name: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                        subject: data[index].subject['length'] !== 0 ? data[index].subject[0] : '',
                        student: data[index].student['length'] !== 0 ? data[index].student[0] : '',
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

    assignMentor(data: number) {
        localStorage.setItem('assignment_data', JSON.stringify(this.subjectsArray[data]));
        this.router.navigate(['/mentor-assignment']);
    }

}
