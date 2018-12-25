import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
    comment: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.comment = data;
    }

}
