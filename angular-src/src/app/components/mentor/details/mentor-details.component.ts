import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-details',
    templateUrl: './mentor-details.component.html',
    styleUrls: ['./mentor-details.component.css']
})
export class MentorDetailsComponent {
    mentor: any;

    displayedColumns: string[] = ['name'];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.mentor = data;
    }

    valueOf(field) {
        return field != null ? field : '';
    }

}
