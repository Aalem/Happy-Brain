import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ExportExcelService} from '../../../services/export-excel/export-excel.service';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';
import {StudentDetailsComponent} from '../../student/details/details.component';
import {MentorDetailsComponent} from '../../mentor/details/mentor-details.component';

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
    displayedColumns2: string[] = ['id', 'student', 'mentor', 'subject', 'start_date', 'status'];
    dataSource2: MatTableDataSource<Object>;

    AssignedStudents: any;
    AssignedStudentsExportArray: any;
    hasStudents2: boolean;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private router: Router,
                private matDialog: MatDialog,
                private excelService: ExportExcelService,
                private studentSubjectService: StudentSubjectService) {
        this.hasStudents2 = true;
        this.isDataLoaded = false;
        this.AssignedStudentsExportArray = [];
        this.AssignedStudents = [];

        this.studentSubjectService.getAllStudentSubjects().subscribe(data => {
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
                    status: data[index].status,
                });

                this.AssignedStudentsExportArray.push({
                    No: Number(index) + 1,
                    Subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    Student: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    Mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    StartingDate: data[index].start_date,
                    status: data[index].status
                });
            }
            this.dataSource2 = new MatTableDataSource(this.AssignedStudents);
            this.dataSource2.paginator = this.paginator;
            this.dataSource2.sort = this.sort;
            this.isDataLoaded = true;
            console.log(this.AssignedStudents);
        });

    }

    applyFilter(filterValue: string) {
        this.dataSource2.filter = filterValue.trim().toLowerCase();

        if (this.dataSource2.paginator) {
            this.dataSource2.paginator.firstPage();
        }
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
        this.excelService.exportAsExcelFile(this.AssignedStudentsExportArray, 'HBE All Classes');
    }

}
