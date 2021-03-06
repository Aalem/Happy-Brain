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
    displayedColumns2: string[] = ['id', 'student_name', 'mentor_name', 'status'];
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
                if (data.hasOwnProperty(index)) {

                    this.AssignedStudents.push({
                        id: Number(index),
                        _id: data[index]._id,
                        subject_name: data[index].data['0'].subject['length'] !== 0 ? data[index].data['0'].subject[0].name : '',
                        student_name: data[index].data['0'].student['length'] !== 0 ? data[index].data['0'].student[0].name + ' ' +
                            data[index].data['0'].student[0].last_name : '',
                        mentor_name: data[index].data['0'].mentor['length'] !== 0 ? data[index].data['0'].mentor[0].name : '',
                        start_date: data[index].data['0'].start_date,
                        student: data[index].data['0'].student['length'] !== 0 ? data[index].data['0'].student[0] : '',
                        mentor: data[index].data['0'].mentor['length'] !== 0 ? data[index].data['0'].mentor[0] : '',
                        status: data[index].data['0'].status,
                    });

                    this.AssignedStudentsExportArray.push({
                        No: Number(index) + 1,
                        Subject: data[index].data['0'].subject['length'] !== 0 ? data[index].data['0'].subject[0].name : '',
                        Student: data[index].data['0'].student['length'] !== 0 ? data[index].data['0'].student[0].name + ' ' +
                            data[index].data['0'].student[0].last_name : '',
                        Mentor: data[index].data['0'].mentor['length'] !== 0 ? data[index].data['0'].mentor[0].name : '',
                        StartingDate: data[index].data['0'].start_date,
                        status: data[index].data['0'].status
                    });
                }
            }
            this.dataSource2 = new MatTableDataSource(this.AssignedStudents);
            setTimeout(() => this.dataSource2.paginator = this.paginator);
            setTimeout(() => this.dataSource2.sort = this.sort);
            this.isDataLoaded = true;
        });

    }

    ShowHistory(data) {
        console.log("id " + data);
        localStorage.setItem('historyData', JSON.stringify(data));
        this.router.navigate(['/class-history']);
    }

    applyFilter(filterValue: string) {
        this.dataSource2.filter = filterValue.trim().toLowerCase();
        if (this.dataSource2.paginator) {
            this.dataSource2.paginator.firstPage();
        }
    }

    openDialog(student) {
        const dialogRef = this.matDialog.open(StudentDetailsComponent, {data: student});
    }

    openDialogMentor(mentor) {
        const dialogRef = this.matDialog.open(MentorDetailsComponent, {data: mentor});
    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.AssignedStudentsExportArray, 'HBE All Classes');
    }

}
