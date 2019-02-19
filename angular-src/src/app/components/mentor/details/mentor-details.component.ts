import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-details',
    templateUrl: './mentor-details.component.html',
    styleUrls: ['./mentor-details.component.css']
})
export class MentorDetailsComponent {
    mentor: any;

    displayedColumns: string[] = ['name'];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) {
        this.mentor = data;
    }

    valueOf(field) {
        return field != null ? field : '';
    }

}
