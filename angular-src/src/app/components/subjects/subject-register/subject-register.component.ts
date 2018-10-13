import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SubjectService} from '../../../services/subject.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-subject-register',
    templateUrl: './subject-register.component.html',
    styleUrls: ['./subject-register.component.css']
})
export class SubjectRegisterComponent {

    name: String;
    description: String;
    sections: String;

    constructor(private router: Router,
                private snackBar: MatSnackBar,
                private subjectService: SubjectService) {
    }

    onRegisterSubmit(formList: any) {
        const subject = {
            name: this.name,
            description: this.description,
            sections: this.sections
        };

        this.subjectService.registerSubject(subject).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('New subject is added!', 'Dismiss', {duration: 2000});
                this.router.navigate(['/subject-list']);
            } else {
                this.snackBar.open('Something went wrong!', 'Dismiss', {duration: 2000});
            }
        });
    }

}
