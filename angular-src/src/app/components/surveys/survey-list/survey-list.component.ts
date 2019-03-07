import {SurveyService} from '../../../services/survey/survey.service';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {StudentDetailsComponent} from '../../student/details/details.component';
import {MentorDetailsComponent} from '../../mentor/details/mentor-details.component';
import {CommentComponent} from '../comment-dialog/comment/comment.component';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent {
    isNoData: boolean;
    surveysArray: any;
    isDataLoaded: boolean;
    subjectId: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'student_name', 'mentor_name', 'subject_name', 'date', 'comment', 'rating'];
    dataSource: MatTableDataSource<Object>;
    dataHistory: any;
    student_name: any;
    mentor_name: any;
    subject_name: any;

    constructor(private surveyService: SurveyService,
                private matDialog: MatDialog,
                private activatedRoute: ActivatedRoute) {
        this.dataHistory = JSON.parse(localStorage.getItem('historyData'));

        this.surveysArray = [];
        this.isDataLoaded = false;
        this.isNoData = false;
        this.student_name = this.dataHistory.student_name;
        this.mentor_name = this.dataHistory.mentor_name;
        this.subject_name = this.dataHistory.subject_name;
        this.subjectId = this.activatedRoute.snapshot.params['id'];
        this.surveyService.getSurveysByStudentSubject(this.subjectId)
            .subscribe(data => {
                for (const index in data) {

                    this.surveysArray.push({
                        id: Number(index),
                        date: data[index].date.split('T')[0],
                        comment: data[index].comment,
                        rating: data[index].rating
                    });
                }
                this.dataSource = new MatTableDataSource(this.surveysArray);
                setTimeout(() => this.dataSource.paginator = this.paginator);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.isDataLoaded = true;
                if (data['length'] == 0) {
                    this.isNoData = true;
                }
            });
    }


    // getStudentSubjectServey(id) {
    //     this.surveyService.getSurveysByStudentSubject(id).then((res) => {
    //         this.student = res;
    //         this.isDataLoaded = true;
    //     }, (err) => {
    //         console.log(err);
    //     });
    // }

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
