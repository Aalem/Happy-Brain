import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../../services/validate.service';
import {AdminService} from '../../../services/admin.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-admin-register',
    templateUrl: './admin-register.component.html',
    styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
    name: String;
    email: String;
    password: String;
    confirmPassword: String;

    constructor(private router: Router,
                private adminService: AdminService,
                private validateService: ValidateService,
                private snackBar: MatSnackBar) {
    }

    onRegisterSubmit(formList: any) {
        const admin = {
            name: this.name,
            email: this.email,
            password: this.password
        };


        if (!this.validateService.validateRegister(admin)) {
            return false;
        }

        // Validate Email
        if (!this.validateService.validateEmail(admin.email)) {
            return false;
        }
        // Match password
        if (this.password !== this.confirmPassword) {
            return false;

        }
        this.adminService.registerAdmin(admin).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('New admin is added!', 'Dismiss', {duration: 2000});
                this.router.navigate(['/admin-list']);
            } else {
                this.snackBar.open('Something went wrong', 'Dismiss', {duration: 2000});
            }
        });
    }
}
