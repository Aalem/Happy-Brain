import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../../../services/subject.service';
import {LocalResService} from '../../../../services/local_res/local-res.service';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

const uri = 'http://localhost:3000/local-res/upload';

@Component({
    selector: 'app-local-register',
    templateUrl: './local-register.component.html',
    styleUrls: ['./local-register.component.css']
})
export class LocalRegisterComponent implements OnInit {

    uploader: FileUploader = new FileUploader({url: uri});
    attachmentList: any = [];
    title: String;
    description: String;
    subject: String;
    fileUplaod: String;
    subjects: Object;

    constructor(private snackBar: MatSnackBar,
                private router: Router,
                private localResService: LocalResService,
                private subjectService: SubjectService) {

        subjectService.getSubjects().subscribe(subjects => {
            this.subjects = subjects;
        });
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            this.attachmentList.push(JSON.parse(response));
        };
    }

    ngOnInit() {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
    }

    onRegisterSubmit(formList: any) {

        const myUploader = this.uploader.queue[this.uploader.queue.length - 1];
        const fileName =  Date.now() + '.' + myUploader.file.name;

        myUploader.file.name = fileName;
        myUploader.upload();

        const localRes = {
            title: this.title,
            description: this.description,
            subject: this.subject,
            fileUplaod: fileName
        };

        this.localResService.registerLocalRes(localRes).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('New resource added', 'dismiss', {duration: 3000});
                formList.form.reset();
            } else {
                this.snackBar.open('Something went wrong!', 'dismiss', {duration: 3000});
            }
        });
        this.router.navigate(['/local-list']);
    }

}
