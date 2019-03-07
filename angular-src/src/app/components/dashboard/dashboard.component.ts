import {StudentSubjectService} from '../../services/student-subject/student-subject.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {StudentDetailsComponent} from '../student/details/details.component';
import {MentorDetailsComponent} from '../mentor/details/mentor-details.component';
import {ExportExcelService} from '../../services/export-excel/export-excel.service';
import {ConfirmComponent} from '../dialogs/confirm/confirm.component';
import {MentoringMeetingService} from '../../services/mentoring-meeting/mentoring-meeting.service';
import {SurveyService} from '../../services/survey/survey.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    unAssignedDisplayedColumns: string[] = ['id', 'name', 'phone', 'country', 'subject_name', 'assign', 'delete'];
    assignedDisplayColumns: string[] = ['id', 'student_name', 'mentor_name', 'subject_name', 'start_date', 'unmatch'];
    unAssignedDataSource: MatTableDataSource<Object>;
    assignedDataSource: MatTableDataSource<Object>;

    UnassignedStudents: any;
    AssignedStudents: any;
    AssignedStudentsExportArray: any;
    hasStudents: boolean;
    hasStudents2: boolean;
    isDataLoaded: boolean;
    isDataLoaded2: boolean;

    @ViewChild(MatPaginator) unassignedPaginator: MatPaginator;
    @ViewChild(MatSort) unassignedSort: MatSort;

    @ViewChild(MatPaginator) assignedPaginagtor: MatPaginator;
    @ViewChild(MatSort) assignedSort: MatSort;

    constructor(private router: Router,
                private matDialog: MatDialog,
                private snackBar: MatSnackBar,
                private excelService: ExportExcelService,
                private mentoringMeetingService: MentoringMeetingService,
                private surveyService: SurveyService,
                private studentSubjectService: StudentSubjectService) {
        this.loadData();

    }

    loadData() {
        this.hasStudents = true;
        this.hasStudents2 = true;
        this.isDataLoaded = false;
        this.UnassignedStudents = [];
        this.AssignedStudentsExportArray = [];
        this.AssignedStudents = [];

        this.studentSubjectService.getUnassignedStudentSubjects()
            .subscribe(data => {

                if (data['length'] == 0) {
                    this.hasStudents = false;
                }
                for (const index in data) {
                    this.UnassignedStudents.push({
                        id: Number(index) + 1,
                        _id: data[index]._id,
                        name: data[index].student['length'] !== 0 ? data[index].student[0].name + ' ' +
                            data[index].student[0].last_name : '',
                        phone: data[index].student['length'] !== 0 ? data[index].student[0].phone : '',
                        country: data[index].student['length'] !== 0 ? data[index].student[0].country : '',
                        subject_name: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                        subject: data[index].subject['length'] !== 0 ? data[index].subject[0] : '',
                        student: data[index].student['length'] !== 0 ? data[index].student[0] : '',
                        student_name: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    });
                }
                this.unAssignedDataSource = new MatTableDataSource(this.UnassignedStudents);
                setTimeout(() => this.unAssignedDataSource.paginator = this.unassignedPaginator);
                setTimeout(() => this.unAssignedDataSource.sort = this.unassignedSort);
                this.isDataLoaded = true;
            });

        this.studentSubjectService.getStudentSubjectsInProgress().subscribe(data => {
            if (data['length'] == 0) {
                this.hasStudents2 = false;
            }
            for (const index in data) {
                this.AssignedStudents.push({
                    id: Number(index) + 1,
                    _id: data[index]._id,
                    student_name: data[index].student['length'] !== 0 ? data[index].student[0].name + ' ' +
                        data[index].student[0].last_name : '',
                    mentor_name: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    subject_name: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    start_date: data[index].start_date,
                    student: data[index].student['length'] !== 0 ? data[index].student[0] : '',
                    mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0] : '',
                });

                this.AssignedStudentsExportArray.push({
                    No: Number(index) + 1,
                    Subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    Student: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    Mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    StartingDate: data[index].start_date,
                });
            }
            this.assignedDataSource = new MatTableDataSource(this.AssignedStudents);
            setTimeout(() => this.assignedDataSource.paginator = this.assignedPaginagtor);
            setTimeout(() => this.assignedDataSource.sort = this.assignedSort);
            this.isDataLoaded2 = true;
        });
    }

    applyFilter(filterValue: string) {
        this.assignedDataSource.filter = filterValue.trim().toLowerCase();

        if (this.assignedDataSource.paginator) {
            this.assignedDataSource.paginator.firstPage();
        }

        this.unAssignedDataSource.filter = filterValue.trim().toLowerCase();

        if (this.unAssignedDataSource.paginator) {
            this.unAssignedDataSource.paginator.firstPage();
        }
    }

    assignMentor(data: number) {

        localStorage.setItem('assignment_data', JSON.stringify(this.UnassignedStudents[data]));
        this.router.navigate(['/mentor-assignment']);
    }

    openDialog(student) {
        const dialogRef = this.matDialog.open(StudentDetailsComponent, {data: student});
    }

    unmatch(row) {
        const studentSubject = {
            mentor_id: null,
            teacher_assigned: false
        };

        const dialogRef = this.matDialog.open(ConfirmComponent, {
            data: {
                title: 'Warning!',
                message: 'Unmatching the student and mentor removes all the Mentoring Meetings and Student\'s Feedbacks',
                warning: 'Do you want to continue??'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result === 'true') {
                this.studentSubjectService.unmatch(row._id, studentSubject).then((res) => {
                    this.mentoringMeetingService.deleteMentoringMeetingsBySubject(row._id).subscribe(data => {
                        this.surveyService.deleteSurveyBySubject(row._id).subscribe(d => {
                            this.loadData();
                            this.snackBar.open('Unmatch completed!', null, {duration: 2000});
                        });
                    });
                }, (err) => {
                    console.log(err);
                });
            }
        });
    }

    openDialogMentor(mentor) {
        const dialogRef = this.matDialog.open(MentorDetailsComponent, {data: mentor});
    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.AssignedStudentsExportArray, 'HBE Classes');
    }

    deleteStudentSubject(id) {
        this.studentSubjectService.deleteStudentSubject(id).then((result) => {
            this.router.navigate(['/dashboard']);
            for (const index in this.UnassignedStudents) {
                if (id == this.UnassignedStudents[index]._id) {
                    this.UnassignedStudents.splice(index, 1);
                    break;
                }
            }
            this.unAssignedDataSource = new MatTableDataSource(this.UnassignedStudents);
        }, (err) => {
            console.log(err);
        });
    }

    deleteStudentDialog(id) {
        const dialogRef = this.matDialog.open(ConfirmComponent, {
            data: {
                title: 'Deletion',
                message: 'Are you sure you want to delete it?',
                warning: 'This action can\'t be reverted!'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result === 'true') {
                this.deleteStudentSubject(id);
            }
        });
    }

}

export class Details {
}


