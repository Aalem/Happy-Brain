import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-admin-edit',
    templateUrl: './admin-edit.component.html',
    styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
    public admin: any;

    constructor(public adminService: AdminService,
                public route: Router,
                public activatedRoute: ActivatedRoute,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.getAdmin(this.activatedRoute.snapshot.params['id']);
    }

    getAdmin(id) {
        this.adminService.getAdmin(id).then((res) => {
            this.admin = res;
        }, (err) => {
            console.log(err);
        });
    }

    updateAdmin(id) {
        this.adminService.editAdmin(id, this.admin).then((result) => {
            this.route.navigate(['/admin-list']);
            this.snackBar.open('User updated!', null, {duration: 1500});
        }, (err) => {
            console.log(err);
        });
    }


}
