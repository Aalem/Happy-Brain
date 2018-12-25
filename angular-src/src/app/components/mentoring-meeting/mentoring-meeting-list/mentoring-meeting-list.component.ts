import {SurveyService} from '../../../services/survey/survey.service';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {StudentDetailsComponent} from '../../student/details/details.component';
import {MentorDetailsComponent} from '../../mentor/details/mentor-details.component';
import {CommentComponent} from '../../surveys/comment-dialog/comment/comment.component';
import {MentoringMeetingService} from "../../../services/mentoring-meeting/mentoring-meeting.service";

@Component({
  selector: 'app-mentoring-meeting-list',
  templateUrl: './mentoring-meeting-list.component.html',
  styleUrls: ['./mentoring-meeting-list.component.css']
})
export class MentoringMeetingListComponent {

    isNoData: boolean;
    MMArray: any;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'subject_name', 'mentor_name', 'student_name', 'session', 'date', 'comment'];
    dataSource: MatTableDataSource<Object>;

    constructor(private surveyService: SurveyService,
                private MMService: MentoringMeetingService,
                private matDialog: MatDialog) {

        this.MMArray = [];
        this.isDataLoaded = false;
        this.isNoData = false;

        this.MMService.getAllMentoringMeetings().subscribe(data => {
           console.log(data[0].student_subjects.student[0]);
            for (const index in data) {
                this.MMArray.push({
                    id: Number(index),
                    date: data[index].date.split('T')[0],
                    comment: data[index].comment,
                    session: data[index].session,
                    student_name: data[index].student_subjects.student[0].name + ' ' +
                        data[index].student_subjects.student[0].last_name,
                    student: data[index].student_subjects.student[0],
                    mentor: data[index].student_subjects.mentor[0],
                    mentor_name: data[index].student_subjects.mentor[0].name,
                    subject_name: data[index].student_subjects.subject[0].name,
                });
            }
            this.dataSource = new MatTableDataSource(this.MMArray);
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
