import {Component, OnInit} from '@angular/core';
import {OnlineResService} from '../../../../services/online_res/online-res.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../../../services/subject.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-online-edit',
    templateUrl: './online-edit.component.html',
    styleUrls: ['./online-edit.component.css']
})
export class OnlineEditComponent implements OnInit {

    onlineRes: any;
    subjects: any;
    isDataLoaded: boolean;

    constructor(private subjectService: SubjectService,
                private  onlineResService: OnlineResService,
                private route: Router,
                private snackBar: MatSnackBar,
                private activatedRoute: ActivatedRoute) {
        this.isDataLoaded = false;
        subjectService.getSubjects().subscribe(subjects => {
            this.subjects = subjects;
        });
    }

    ngOnInit() {
        this.getOnlineRes(this.activatedRoute.snapshot.params['id']);
    }

    getOnlineRes(id) {
        this.onlineResService.getOnlineRes(id).then((res) => {
            this.onlineRes = res;
            this.isDataLoaded = true;
        }, (err) => {
            console.log(err);
        });
    }

    updateOnlineRes(id) {
        this.onlineResService.editOnlineRes(id, this.onlineRes).then((result) => {
            this.route.navigate(['/online-list']);
            this.snackBar.open('Resource updated!', null, {duration: 3000});

        }, (err) => {
            console.log(err);
        });
    }

}
