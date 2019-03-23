import {SurveyService} from '../../../services/survey/survey.service';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {StudentDetailsComponent} from '../../student/details/details.component';
import {MentorDetailsComponent} from '../../mentor/details/mentor-details.component';
import {CommentComponent} from '../../surveys/comment-dialog/comment/comment.component';
import {MentoringMeetingService} from "../../../services/mentoring-meeting/mentoring-meeting.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-mentoring-meeting-list',
    templateUrl: './mentoring-meeting-list.component.html',
    styleUrls: ['./mentoring-meeting-list.component.css']
})
export class MentoringMeetingListComponent {

    isNoData: boolean;
    MMArray: any;
    isDataLoaded: boolean;
    subjectId: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'session', 'date', 'duration', 'comment'];
    dataSource: MatTableDataSource<Object>;

    constructor(private surveyService: SurveyService,
                private activatedRoute: ActivatedRoute,
                private MMService: MentoringMeetingService,
                private matDialog: MatDialog) {

        this.MMArray = [];
        this.isDataLoaded = false;
        this.isNoData = false;
        this.subjectId = this.activatedRoute.snapshot.params['id'];

        this.MMService.getMentoringMeetingsByStudentSubject(this.subjectId).subscribe(data => {
            console.log(data);
            if (data['length'] == 0) {
                this.isNoData = true;
            } else {

                for (const index in data) {
                    this.MMArray.push({
                        id: Number(index),
                        date: data[index].date.split('T')[0],
                        comment: data[index].comment,
                        session: data[index].session,
                        duration: data[index].duration
                    });
                }
            }
            this.dataSource = new MatTableDataSource(this.MMArray);
            setTimeout(() => this.dataSource.paginator = this.paginator);
            setTimeout(() => this.dataSource.sort = this.sort);
            this.isDataLoaded = true;
        });

    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    studentDetails(student) {
        const dialogRef = this.matDialog.open(StudentDetailsComponent, {data: student});
    }

    mentorDetails(mentor) {
        const dialogRef = this.matDialog.open(MentorDetailsComponent, {data: mentor});
    }

    showComment(comment) {
        const dialogRef = this.matDialog.open(CommentComponent, {data: comment});
    }


}
