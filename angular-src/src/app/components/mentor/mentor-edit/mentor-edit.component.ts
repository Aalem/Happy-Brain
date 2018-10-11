import {Component, OnInit} from '@angular/core';
import {MentorService} from "../../../services/mentor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatRadioChange, MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-mentor-edit',
    templateUrl: './mentor-edit.component.html',
    styleUrls: ['./mentor-edit.component.css']
})
export class MentorEditComponent implements OnInit {

    mentor: any;

    constructor(private  mentorService: MentorService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private snackBar: MatSnackBar) {

    }

    ngOnInit() {
        this.getMentor(this.activatedRoute.snapshot.params['id']);
    }

    getMentor(id) {
        this.mentorService.getMentor(id).then((res) => {
            this.mentor = res;
        }, (err) => {
            console.log(err);
        });
    }

    updateMentor(id) {
        this.mentorService.editMentor(id, this.mentor).then((result) => {
            let id = result['_id'];
            this.route.navigate(['/mentor-list']);
            this.snackBar.open('Mentor updated!', null, {duration: 2000});

        }, (err) => {
            console.log(err);
        });
    }

    onChange(mrChange: MatRadioChange) {
        if (mrChange.source.name === 'wwcc') {
            this.mentor['wwcc'] = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.mentor['gender'] = mrChange.source.value;
        }
    }

}
