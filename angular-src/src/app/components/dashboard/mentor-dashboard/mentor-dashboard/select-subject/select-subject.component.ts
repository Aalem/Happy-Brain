import {SubjectService} from '../../../../../services/subject.service';
import {MentorSubjectService} from '../../../../../services/mentor-subject/mentor-subject.service';
import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatSnackBar, MatTableDataSource} from '@angular/material';


@Component({
    selector: 'app-select-subject',
    templateUrl: './select-subject.component.html',
    styleUrls: ['./select-subject.component.css']
})

export class SelectSubjectComponent {
    displayedColumns: string[] = [ 'position', 'name', 'select'];
    dataSource: MatTableDataSource<Object>;
    selection = new SelectionModel(true, []);
    alreadyHasSubjects: boolean;
    selectedSubjects: any;

    subjects: any;
    mentor_subject_id: any;
    mentor_subjects: any;
    mentor_id: String;

    subjects_id: any;
    i = 0;
    j = 0;

    enableSaveButton: boolean;

    constructor(private subjectService: SubjectService,
                private mentorSubjectService: MentorSubjectService,
                private snackBar: MatSnackBar) {
        this.enableSaveButton = false;
        this.alreadyHasSubjects = false;
        this.selectedSubjects = [];
        this.mentor_id = JSON.parse(localStorage.getItem('user')).id;
        this.mentor_subjects = [];
        this.mentorSubjectService.getMentorSubjects(this.mentor_id).subscribe(data => {
            if (data['length'] !== 0) {
                this.mentor_subjects = data[0].subjects;
                this.mentor_subject_id = data[0]._id;
            }
            // console.log(data);

        });

        this.subjectService.getSubjects().subscribe(data => {
            this.subjects = [];
            for (this.i = 0; this.i < data['length']; this.i++) {
                this.subjects.push({
                    id: data[this.i]._id,
                    position: this.i,
                    name: data[this.i].name,
                    checked: false,
                    hasSubject: false
                });
                if (this.mentor_subjects.length !== 0) {
                    for (this.j = 0; this.j < this.mentor_subjects.length; this.j++) {
                        if (data[this.i]._id === this.mentor_subjects[this.j]) {
                            this.subjects[this.i].checked = true;
                            this.subjects[this.i].hasSubject = true;
                            this.alreadyHasSubjects = true;
                        }
                    }
                }
            }
            this.dataSource = new MatTableDataSource(this.subjects);
        });
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    toggle(row) {
        if (!this.subjects[row.position].checked) {
            this.subjects[row.position].checked = true;
        } else {
            this.subjects[row.position].checked = false;
        }
        this.enableSaveButton = true;
    }

    onRegisterSubmit() {
        this.subjects_id = [];
        for (const index in this.subjects) {
            if (this.subjects[index].checked) {
                this.subjects_id.push(this.subjects[index].id);
            }
        }
        const mentor_selected_subject = {
            mentor_id: this.mentor_id,
            subjects: this.subjects_id
        };
        if (this.alreadyHasSubjects) {
            console.log(this.mentor_subject_id);
            this.mentorSubjectService.editMentorSubject(this.mentor_subject_id, mentor_selected_subject);
        } else {
            this.mentorSubjectService.registerMentorSubject(mentor_selected_subject).subscribe(data => {
                if (data['success']) {
                    this.snackBar.open('Subjects selected!', null, {duration: 1500});
                    // this.router.navigate(['/mentor-dashboard']);
                } else {
                    this.snackBar.open('Something went wrong!', 'Dismiss', {duration: 2000});
                }
            });
        }
        this.enableSaveButton = false;
    }
}
