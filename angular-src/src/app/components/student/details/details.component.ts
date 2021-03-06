import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class StudentDetailsComponent {
    student: any;

    displayedColumns: string[] = ['name'];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data.name);
        this.student = data;
    }

    valueOf(field) {
        return field != null ? field : '';
    }


}
