import {MentorService} from '../../../services/mentor.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-mentor-list',
    templateUrl: './mentor-list.component.html',
    styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent {
    displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'gender', 'status', 'edit', 'delete'];
    dataSource: MatTableDataSource<Object>;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    mentors: any;
    users: any;
    i = 0;

    constructor(private mentorService: MentorService, private router: Router) {
        this.isDataLoaded = false;
        this.mentorService.getMentors()
            .subscribe(mentors => {
                this.mentors = mentors;
                this.users = [];
                for (this.i = 0; this.i < this.mentors.length; this.i++) {
                    this.users.push({
                        id: this.i + 1,
                        _id: this.mentors[this.i]._id,
                        name: this.mentors[this.i].name,
                        email: this.mentors[this.i].email,
                        phone: this.mentors[this.i].phone,
                        gender: this.mentors[this.i].gender,
                        status: this.mentors[this.i].status,
                        edit: '',
                        delete: ''
                    });
                }
                this.dataSource = new MatTableDataSource(this.users);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.isDataLoaded = true;
            });
    }

    deleteMentor(id) {
        this.mentorService.deleteMentor(id).then((result) => {
            this.router.navigate(['/mentor-list']);
        }, (err) => {
            console.log(err);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
