import {StudentService} from '../../../services/student.service';
import {Router} from '@angular/router';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'gender', 'status', 'edit', 'delete'];
    dataSource: MatTableDataSource<Object>;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    users: any;
    students: any;
    i = 0;

    constructor(private studentService: StudentService, private router: Router) {
        this.isDataLoaded = false;

        this.studentService.getStudents()
            .subscribe(students => {
                this.students = students;
                this.users = [];
                for (this.i = 0; this.i < this.students.length; this.i++) {
                    this.users.push({
                        id: this.i + 1,
                        _id: this.students[this.i]._id,
                        name: this.students[this.i].name,
                        email: this.students[this.i].email,
                        phone: this.students[this.i].phone,
                        gender: this.students[this.i].gender,
                        status: this.students[this.i].status,
                        edit: '',
                        delete: ''
                    });
                }
                this.dataSource = new MatTableDataSource(this.users);
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

    deleteStudent(id) {
        this.studentService.deleteStudent(id).then((result) => {
            this.router.navigate(['/student-list']);
        }, (err) => {
            console.log(err);
        });
    }

}
