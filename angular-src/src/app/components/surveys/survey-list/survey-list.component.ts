import {SurveyService} from '../../../services/survey/survey.service';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {StudentDetailsComponent} from '../../student/details/details.component';
import {MentorDetailsComponent} from '../../mentor/details/mentor-details.component';
import {CommentComponent} from '../comment-dialog/comment/comment.component';

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent {
    isNoData: boolean;
    surveysArray: any;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'student_name', 'mentor_name', 'subject_name', 'date', 'comment', 'rating'];
    dataSource: MatTableDataSource<Object>;

    constructor(private surveyService: SurveyService,
                private matDialog: MatDialog) {

        this.surveysArray = [];
        this.isDataLoaded = false;
        this.isNoData = false;

        this.surveyService.getAllSurveys()
            .subscribe(data => {
                for (const index in data) {
                    this.surveysArray.push({
                        id: Number(index),
                        date: data[index].date.split('T')[0],
                        comment: data[index].comment,
                        rating: data[index].rating,
                        student_name: data[index].student[0].name + ' ' + data[index].student[0].last_name,
                        student: data[index].student[0],
                        mentor: data[index].mentor[0],
                        mentor_name: data[index].mentor[0].name,
                        subject_name: data[index].subject[0].name,
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
