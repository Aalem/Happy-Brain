import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatRadioChange, MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

    public student: any;
    isDataLoaded: boolean;

    constructor(private  studentService: StudentService,
                private route: Router,
                private activatedRoute: ActivatedRoute,
                private snackBar: MatSnackBar) {
        this.isDataLoaded = false;

    }

    ngOnInit() {
        this.getStudent(this.activatedRoute.snapshot.params['id']);
    }

    getStudent(id) {
        this.studentService.getStudent(id).then((res) => {
            this.student = res;
            this.isDataLoaded = true;
        }, (err) => {
            console.log(err);
        });
    }

    updateStudent(id) {
        this.studentService.editStudent(id, this.student).then((result) => {
            let id = result['_id'];
            this.route.navigate(['/student-list']);
            this.snackBar.open('Student updated!', null, {duration: 2000});

        }, (err) => {
            console.log(err);
        });
    }

    onChange(mrChange: MatRadioChange) {
        if (mrChange.source.name === 'tutor_gender') {
            this.student['tutor_gender'] = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.student['gender'] = mrChange.source.value;
        }
    }


}
