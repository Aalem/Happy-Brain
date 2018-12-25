import {StudentService} from '../../../services/student.service';
import {Router} from '@angular/router';
import {Component, ViewChild} from '@angular/core';
import {StudentDetailsComponent} from '../details/details.component';
import {ExportExcelService} from '../../../services/export-excel/export-excel.service';
import {ConfirmComponent} from '../../dialogs/confirm/confirm.component';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'year_level', 'delete'];
    dataSource: MatTableDataSource<Object>;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    users: any;
    students: any;

    constructor(private studentService: StudentService,
                private excelService: ExportExcelService,
                private matDialog: MatDialog,
                private router: Router) {
        this.isDataLoaded = false;
        this.students = [];

        this.studentService.getStudents()
            .subscribe(students => {
                this.users = [];
                for (const index in students) {
                    this.users.push({
                        _id: students[index]._id,
                        name: students[index].name + ' ' + students[index].last_name,
                        email: students[index].email,
                        phone: students[index].phone,
                        school_level: students[index].school_level,
                        student: students[index]
                    });
                    this.students.push({
                        No: Number(index) + 1,
                        Name: students[index].name + ' ' + students[index].last_name,
                        Gender: students[index].gender,
                        Email: students[index].email,
                        Phone: students[index].phone,
                        ParentsName: students[index].parents_name,
                        ParentsPhone: students[index].parents_phone,
                        FamilySituatin: students[index].family_situation,
                        Country: students[index].country,
                        Language: students[index].language,
                        EnglishLevel: students[index].english_level,
                        Age: students[index].age,
                        DOB: students[index].dob,
                        Subjects: students[index].subjects,
                        School: students[index].school_name,
                        SchoolLevel: students[index].school_level,
                        Address: students[index].address,
                        MentoringAddress: students[index].mentoring_address,
                        TutorGender: students[index].tutor_gender,
                        CaseManager: students[index].cm_name,
                        CaseManagerPhone: students[index].cm_phone,
                        CaseManagerEmail: students[index].cm_email
                    });
                }
                this.dataSource = new MatTableDataSource(this.users);
                setTimeout(() => this.dataSource.paginator = this.paginator);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.isDataLoaded = true;
            });
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteStudent(id) {
        this.studentService.deleteStudent(id).then((result) => {
            this.router.navigate(['/student-list']);
        }, (err) => {
            console.log(err);
        });
    }

    openDialog(student) {
        const dialogRef = this.matDialog.open(StudentDetailsComponent, {data: student});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    deleteStudentDialog(id) {
        const dialogRef = this.matDialog.open(ConfirmComponent, {
            data: {
                title: 'Deletion',
                message: 'Are you sure you want to delete this student?',
                warning: 'This action can\'t be reverted!'
            }});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result === 'true') {
                this.deleteStudent(id);
            }
        });
    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.students, 'HBE Registered Students');
    }

}
