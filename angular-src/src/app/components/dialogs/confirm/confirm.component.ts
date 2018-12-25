import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
    title: String;
    message: String;
    warning: String;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.message = data.message;
        this.title = data.title;
        this.warning = data.warning;
    }

}
