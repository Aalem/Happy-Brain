import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ValidateService} from "../../../../services/validate.service";
import {MentorService} from "../../../../services/mentor.service";
import {MatRadioChange, MatSnackBar} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';
import {ConfigService} from "../../../../services/config.service";
import {MessageService} from "../../../../services/messages/message.service";

const uri = 'mentor_subjects/upload';

@Component({
    selector: 'app-mentor-register',
    templateUrl: './mentor-register.component.html',
    styleUrls: ['./mentor-register.component.css']
})
export class MentorRegisterComponent implements OnInit {
    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    uploader: FileUploader;
    attachmentList: any = [];

    wwcc_back: String;
    wwcc_front: String;

    @Output()
    change: EventEmitter<MatRadioChange>

    name: String;
    password: String;
    email: String;
    phone: String;
    language: String;
    vce_subjects: String;
    subjects: String;
    location: String;
    studying: String;
    experience: String;
    volunteering: String;
    wwcc: String;
    why_join: String;
    about_us: String;
    refugee_definition: String;
    preference: String;
    gender: String;
    send_me_copy: String;

    constructor(private _formBuilder: FormBuilder,
                private mentorService: MentorService,
                private router: Router,
                private config: ConfigService,
                private messageService: MessageService,
                private snackBar: MatSnackBar,
                private validateService: ValidateService) {
        this.uploader = new FileUploader({url: config.getUrl() + '/' + uri});
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

            this.attachmentList.push(JSON.parse(response));
            // if (this.attachmentList.length === 2) {
            //     this.secondFormGroup.controls.x.setValue('Hello');
            // }
        };
    }

    onChange(mrChange: MatRadioChange) {
        if (mrChange.source.name === 'wwcc') {
            this.wwcc = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.gender = mrChange.source.value;
        }
    }


    ngOnInit() {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.firstFormGroup = this._formBuilder.group({
            name: ['', Validators.required && Validators.minLength(3)],
            email: ['', Validators.email],
            password: ['', Validators.required && Validators.minLength(5)],
            phone: ['', Validators.required],
            language: ['', Validators.required],
            vce_subjects: ['', Validators.required],
            subjects: ['', Validators.required],
            location: ['', Validators.required],
            studying: ['', Validators.required],
            experience: ['', Validators.required],
            volunteering: ['', Validators.required],
            wwcc: ['', Validators.required],
            about_us: ['', Validators.required],
            why_join: ['', Validators.required],
            refugee_definition: ['', Validators.required],
            preference: ['', Validators.required],
            gender: ['', Validators.required],
            send_me_copy: [''],

        });
        this.secondFormGroup = this._formBuilder.group({
            wwcc_back: [''],
            x: [''],
        });
        this.thirdFormGroup = this._formBuilder.group({});
    }

    onRegisterSubmit() {
        const mentor = {
            name: this.firstFormGroup.controls.name.value,
            password: this.firstFormGroup.controls.password.value,
            email: this.firstFormGroup.controls.email.value,
            phone: this.firstFormGroup.controls.phone.value,
            language: this.firstFormGroup.controls.language.value,
            vce_subjects: this.firstFormGroup.controls.vce_subjects.value,
            subjects: this.firstFormGroup.controls.subjects.value,
            location: this.firstFormGroup.controls.location.value,
            studying: this.firstFormGroup.controls.studying.value,
            experience: this.firstFormGroup.controls.experience.value,
            volunteering: this.firstFormGroup.controls.volunteering.value,
            wwcc: this.firstFormGroup.controls.wwcc.value,
            why_join: this.firstFormGroup.controls.why_join.value,
            about_us: this.firstFormGroup.controls.about_us.value,
            refugee_definition: this.firstFormGroup.controls.refugee_definition.value,
            preference: this.firstFormGroup.controls.preference.value,
            gender: this.firstFormGroup.controls.gender.value,
            send_me_copy: this.firstFormGroup.controls.send_me_copy.value,
            wwcc_front: this.attachmentList[0] != null ? this.attachmentList[0].uploadname : '',
            wwcc_back: this.attachmentList[1] != null ? this.attachmentList[1].uploadname : ''
        };

        this.mentorService.registerMentor(mentor).subscribe(data => {
            if (data['success']) {
                const Message = {
                    title: 'New Mentor Registered',
                    message: mentor.name + ' has registered to the system, as Mentor, and needs to be verified!',
                    user: '1'
                };

                this.messageService.sendNotification(Message).subscribe(d => {console.log(d); });
                this.snackBar.open('New mentor added', null, {duration: 3000});
                this.router.navigate(['/login']);
            } else {
                this.snackBar.open('Something went wrong!', null, {duration: 3000});
            }
        });
    }
}
