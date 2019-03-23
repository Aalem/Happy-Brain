import {Component, Inject, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ExportExcelService} from '../../../services/export-excel/export-excel.service';
import {StudentSubjectService} from '../../../services/student-subject/student-subject.service';
import {StudentDetailsComponent} from '../../student/details/details.component';
import {MentorDetailsComponent} from '../../mentor/details/mentor-details.component';

@Component({
    selector: 'app-class-history',
    templateUrl: './class-history.component.html',
    styleUrls: ['./class-history.component.css']
})
export class ClassHistoryComponent {
    displayedColumns2: string[] = ['id', 'subject_name', 'start_date', 'end_date', 'status', 'feedback', 'mentoringmeeting'];
    dataSource2: MatTableDataSource<Object>;

    AssignedStudents: any;
    AssignedStudentsExportArray: any;
    hasStudents2: boolean;
    isDataLoaded: boolean;
    studentName: String;
    mentorName: String;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataHistory: any;

    constructor(private router: Router,
                private matDialog: MatDialog,
                private excelService: ExportExcelService,
                private studentSubjectService: StudentSubjectService) {


        this.hasStudents2 = true;
        this.isDataLoaded = false;
        this.AssignedStudentsExportArray = [];
        this.AssignedStudents = [];
        this.dataHistory = JSON.parse(localStorage.getItem('historyData'));
        // console.log(JSON.parse(this.dataHistory));

        this.studentSubjectService.getStudentSubjectsByStudentAndMentor('/'+this.dataHistory.student._id+'-'+this.dataHistory.mentor._id).subscribe(data => {
            // console.log(data);
            if (data['length'] == 0) {
                this.hasStudents2 = false;
            }

            for (const index in data) {
                if (data.hasOwnProperty(index)) {
                    console.log(data[index]._id);
                    this.AssignedStudents.push({
                        id: Number(index),
                        _id: data[index]._id,
                        subject_name: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                        student_name: data[index].student['length'] !== 0 ? data[index].student[0].name + ' ' +
                            data[index].student[0].last_name : '',
                        mentor_name: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                        start_date: data[index].start_date,
                        end_date: data[index].end_date,
                        student: data[index].student['length'] !== 0 ? data[index].student[0] : '',
                        mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0] : '',
                        status: data[index].status,
                    });

                    this.AssignedStudentsExportArray.push({
                        No: Number(index) + 1,
                        Subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                        Student: data[index].student['length'] !== 0 ? data[index].student[0].name + ' ' +
                            data[index].student[0].last_name : '',
                        Mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                        StartingDate: data[index].start_date,
                        status: data[index].status
                    });
                }
            }
            this.dataSource2 = new MatTableDataSource(this.AssignedStudents);
            setTimeout(() => this.dataSource2.paginator = this.paginator);
            setTimeout(() => this.dataSource2.sort = this.sort);
            this.isDataLoaded = true;
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
    }

    showFeedbacks(id) {
        this.router.navigate(['/survey-list',id]);
    }

    showMentoringMeeting(id) {
        this.router.navigate(['/mentoring-meetings',id]);
    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.AssignedStudentsExportArray, 'HBE All Classes');
    }
}
