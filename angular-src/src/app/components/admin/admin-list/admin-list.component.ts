import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';

import {Component,  ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-admin-list',
    templateUrl: './admin-list.component.html',
    styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent  {
    displayedColumns: string[] = ['id', 'name', 'email', 'edit', 'delete'];
    dataSource: MatTableDataSource<Object>;
    admins: any;
    users: any;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    i = 0;

    constructor(private adminService: AdminService,
                private router: Router,
                private snackBar: MatSnackBar) {

        this.isDataLoaded = false;
        this.admins = [];
        this.adminService.getAdmins()
            .subscribe(admins => {
                this.admins = admins;

                this.users = [];
                for (this.i = 0; this.i < this.admins.length; this.i++) {
                    this.users.push({
                        id: this.i + 1,
                        _id: this.admins[this.i]._id,
                        name: this.admins[this.i].name,
                        email: this.admins[this.i].email
                    });
                }
                this.dataSource = new MatTableDataSource(this.users);
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

    deleteAdmin(id) {
        this.adminService.deleteAdmin(id).then((result) => {
            this.router.navigate(['/admin-list']);
            this.snackBar.open('User deleted!', 'Dimiss', {duration: 2000});
        }, (err) => {
            console.log(err);
        });

    }

}

