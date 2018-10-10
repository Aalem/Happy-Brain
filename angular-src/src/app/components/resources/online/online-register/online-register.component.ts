import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {OnlineResService} from '../../../../services/online_res/online-res.service';
import {SubjectService} from '../../../../services/subject.service';
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-online-register',
    templateUrl: './online-register.component.html',
    styleUrls: ['./online-register.component.css']
})
export class OnlineRegisterComponent implements OnInit {
    title: String;
    description: String;
    subject: String;
    link: String;
    subjects: Object;

    constructor(private router: Router,
                private snackBar: MatSnackBar,
                private onlineResService: OnlineResService,
                private subjectService: SubjectService) {

        subjectService.getSubjects().subscribe(subjects => {
            this.subjects = subjects;
        });
    }

    ngOnInit() {
    }

    onRegisterSubmit(formList: any) {
        const onlineRes = {
            title: this.title,
            description: this.description,
            subject: this.subject,
            link: this.link
        }

        this.onlineResService.registerOnlineRes(onlineRes).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('New resource added', null, {duration: 1500});
                 this.router.navigate(['/online-list']);
            } else {
                this.snackBar.open('Something went wrong!', 'Dismiss', {duration: 2000});
            }
        });
    }

}
