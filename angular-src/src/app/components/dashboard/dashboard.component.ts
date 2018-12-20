import {StudentSubjectService} from '../../services/student-subject/student-subject.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {StudentDetailsComponent} from '../student/details/details.component';
import {MentorDetailsComponent} from '../mentor/details/mentor-details.component';
import {ExportExcelService} from '../../services/export-excel/export-excel.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    displayedColumns: string[] = ['id', 'name', 'phone', 'country', 'subject', 'assign'];
    displayedColumns2: string[] = ['id', 'student', 'mentor', 'subject', 'start_date'];
    dataSource: MatTableDataSource<Object>;
    dataSource2: MatTableDataSource<Object>;

    UnassignedStudents: any;
    AssignedStudents: any;
    AssignedStudentsExportArray: any;
    hasStudents: boolean;
    hasStudents2: boolean;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private router: Router,
                private matDialog: MatDialog,
                private excelService: ExportExcelService,
                private studentSubjectService: StudentSubjectService) {
        this.hasStudents = true;
        this.hasStudents2 = true;
        this.isDataLoaded = false;
        this.UnassignedStudents = [];
        this.AssignedStudentsExportArray = [];
        this.AssignedStudents = [];

        this.studentSubjectService.getStudentSubjectsInProgress().subscribe(data => {
            console.log(data);
            if (data['length'] == 0) {
                this.hasStudents2 = false;
            }
            for (const index in data) {
                this.AssignedStudents.push({
                    id: Number(index),
                    _id: data[index]._id,
                    subject_name: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    student_name: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    mentor_name: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    start_date: data[index].start_date,
                    student: data[index].student['length'] !== 0 ? data[index].student[0] : '',
                    mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0] : '',
                });

                this.AssignedStudentsExportArray.push({
                    No: Number(index)+1,
                    Subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    Student: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    Mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    StartingDate: data[index].start_date,
                });
            }
            this.dataSource2 = new MatTableDataSource(this.AssignedStudents);
            this.dataSource2.paginator = this.paginator;
            this.dataSource2.sort = this.sort;
            this.isDataLoaded = true;
            console.log(this.AssignedStudents);
        });

        this.studentSubjectService.getUnassignedStudentSubjects()
            .subscribe(data => {

                if (data['length'] == 0) {
                    this.hasStudents = false;
                }
                for (const index in data) {
                    this.UnassignedStudents.push({
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
                this.dataSource = new MatTableDataSource(this.UnassignedStudents);
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

        this.dataSource2.filter = filterValue.trim().toLowerCase();

        if (this.dataSource2.paginator) {
            this.dataSource2.paginator.firstPage();
        }
    }

    assignMentor(data: number) {
        localStorage.setItem('assignment_data', JSON.stringify(this.UnassignedStudents[data]));
        this.router.navigate(['/mentor-assignment']);
    }

    openDialog(student) {
        const dialogRef = this.matDialog.open(StudentDetailsComponent, {data: student});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openDialogMentor(mentor) {
        const dialogRef = this.matDialog.open(MentorDetailsComponent, {data: mentor});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.AssignedStudentsExportArray, 'HBE Classes');
    }

}

export class Details {
}


