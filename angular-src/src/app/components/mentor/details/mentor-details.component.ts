import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-details',
    templateUrl: './mentor-details.component.html',
    styleUrls: ['./mentor-details.component.css']
})
export class MentorDetailsComponent implements OnInit {
    mentor: any;

    displayedColumns: string[] = ['name'];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.mentor = data;
    }

    ngOnInit() {
    }

    valueOf(field) {
        return field != null ? field : '';
    }

}
