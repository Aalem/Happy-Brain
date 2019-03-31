import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent, Details} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {StudentRegisterComponent} from './components/student/register/student-register/student-register.component';
import {MentorRegisterComponent} from './components/mentor/register/mentor-register/mentor-register.component';

import {DataTableComponent} from './data-table/data-table.component';
import {AdminRegisterComponent} from './components/admin/admin-register/admin-register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminListComponent} from './components/admin/admin-list/admin-list.component';
import {AdminEditComponent} from './components/admin/admin-edit/admin-edit.component';
import {StudentListComponent} from './components/student/student-list/student-list.component';
import {StudentEditComponent} from './components/student/student-edit/student-edit.component';
import {MentorListComponent} from './components/mentor/mentor-list/mentor-list.component';
import {MentorEditComponent} from './components/mentor/mentor-edit/mentor-edit.component';
import {SubjectRegisterComponent} from './components/subjects/subject-register/subject-register.component';
import {SubjectListComponent} from './components/subjects/subject-list/subject-list.component';
import {SubjectEditComponent} from './components/subjects/subject-edit/subject-edit.component';
import {OnlineRegisterComponent} from './components/resources/online/online-register/online-register.component';
import {OnlineEditComponent} from './components/resources/online/online-edit/online-edit.component';
import {OnlineListComponent} from './components/resources/online/online-list/online-list.component';
import {LocalRegisterComponent} from './components/resources/local/local-register/local-register.component';
import {LocalEditComponent} from './components/resources/local/local-edit/local-edit.component';
import {LocalListComponent} from './components/resources/local/local-list/local-list.component';
import {FileUploadModule} from 'ng2-file-upload';
import {JwtModule} from '@auth0/angular-jwt';
import {RoleGuard} from './guards/role.guard';
import {LoginGuard} from './guards/login.guard';
import {StudentDashboardComponent} from './components/dashboard/student-dashboard/student-dashboard.component';
import {StudentEnrollmentComponent} from './components/dashboard/student-dashboard/student-enrollment/student-enrollment.component';
import {MentorDashboardComponent} from './components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component';
import {SelectSubjectComponent} from './components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component';
import {MentorAssignmentComponent} from './components/mentor/mentor-assignment/mentor-assignment.component';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';

import {
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatMenu, MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatFormFieldControl, MatInputModule,
    MatRadioModule, MatCheckboxModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatStepperModule, MatTooltipModule,
    MatProgressBarModule, MatDialogModule, MatSpinner, MatProgressSpinnerModule, MatGridListModule, MatTabsModule,
    MatBadgeModule
} from '@angular/material';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateMentoringMeetingComponent } from './components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component';
import { CreateSurveyComponent } from './components/surveys/create-survey/create-survey.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import {StudentDetailsComponent} from './components/student/details/details.component';
import {MentorDetailsComponent} from './components/mentor/details/mentor-details.component';
import { ClassesComponent } from './components/reports/classes/classes.component';
import { SurveyListComponent } from './components/surveys/survey-list/survey-list.component';
import { CommentComponent } from './components/surveys/comment-dialog/comment/comment.component';
import { ConfirmComponent } from './components/dialogs/confirm/confirm.component';
import { MentoringMeetingListComponent } from './components/mentoring-meeting/mentoring-meeting-list/mentoring-meeting-list.component';
import { ClassHistoryComponent } from './components/reports/class-history/class-history.component';
import { MessageComponent } from './components/messages/message/message.component';



const appRoutes: Routes = [
    {path: '', component: LoginComponent, canActivate: [LoginGuard]},
    {path: 'student-register', component: StudentRegisterComponent, canActivate: [LoginGuard]},
    {path: 'mentor-register', component: MentorRegisterComponent, canActivate: [LoginGuard]},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'admin-register', component: AdminRegisterComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'admin-list', component: AdminListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'admin-list/:id', component: AdminListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'admin-edit/:id', component: AdminEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'student-list', component: StudentListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'student-list/:id', component: StudentListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'student-edit/:id', component: StudentEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'mentor-list', component: MentorListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'mentor-list/:id', component: MentorListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'mentor-edit/:id', component: MentorEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'subject-edit/:id', component: SubjectEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'subject-list/:id', component: SubjectListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'subject-list', component: SubjectListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'subject-register', component: SubjectRegisterComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'online-register', component: OnlineRegisterComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'online-edit/:id', component: OnlineEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'online-list/:id', component: OnlineListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'online-list', component: OnlineListComponent, canActivate: [AuthGuard]},
    {path: 'local-register', component: LocalRegisterComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'local-edit/:id', component: LocalEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'local-list/:id', component: LocalListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'local-list', component: LocalListComponent, canActivate: [AuthGuard]},
    {path: 'student-dashboard/:id', component: StudentDashboardComponent, canActivate: [RoleGuard], data: {expectedRole: 'student'}},
    {path: 'student-dashboard', component: StudentDashboardComponent, canActivate: [RoleGuard], data: {expectedRole: 'student'}},
    {path: 'student-enrollment', component: StudentEnrollmentComponent, canActivate: [RoleGuard], data: {expectedRole: 'student'}},
    {path: 'mentor-dashboard', component: MentorDashboardComponent, canActivate: [RoleGuard], data: {expectedRole: 'mentor'}},
    {path: 'mentor-assignment', component: MentorAssignmentComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'select-subject', component: SelectSubjectComponent, canActivate: [RoleGuard], data: {expectedRole: 'mentor'}},
    {path: 'select-subject/:id', component: SelectSubjectComponent, canActivate: [RoleGuard], data: {expectedRole: 'mentor'}},
    {path: 'create-mentoring-meeting/:id', component: CreateMentoringMeetingComponent, canActivate: [RoleGuard], data: {expectedRole: 'mentor'}},
    {path: 'create-survey/:id', component: CreateSurveyComponent, canActivate: [RoleGuard], data: {expectedRole: 'student'}},
    {path: 'classes-report', component: ClassesComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'survey-list', component: SurveyListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'survey-list/:id', component: SurveyListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'mentoring-meetings', component: MentoringMeetingListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'mentoring-meetings/:id', component: MentoringMeetingListComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'class-history', component: ClassHistoryComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
    {path: 'notifications', component: MessageComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    ];


export function tokenGetter() {
    return localStorage.getItem('id_token');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        ProfileComponent,
        StudentRegisterComponent,
        MentorRegisterComponent,
        AdminRegisterComponent,
        DataTableComponent,
        AdminListComponent,
        AdminEditComponent,
        StudentListComponent,
        StudentEditComponent,
        MentorListComponent,
        MentorEditComponent,
        SubjectRegisterComponent,
        SubjectListComponent,
        SubjectEditComponent,
        OnlineRegisterComponent,
        OnlineEditComponent,
        OnlineListComponent,
        LocalRegisterComponent,
        LocalEditComponent,
        LocalListComponent,
        StudentDashboardComponent,
        StudentEnrollmentComponent,
        MentorDashboardComponent,
        SelectSubjectComponent,
        MentorAssignmentComponent,
        MainNavComponent,
        PageNotFoundComponent,
        CreateMentoringMeetingComponent,
        CreateSurveyComponent,
        StarRatingComponent,
        StudentDetailsComponent,
        MentorDetailsComponent,
        ClassesComponent,
        SurveyListComponent,
        CommentComponent,
        ConfirmComponent,
        MentoringMeetingListComponent,
        ClassHistoryComponent,
        MessageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FlashMessagesModule.forRoot(),
        BrowserAnimationsModule,
        FileUploadModule,
        LayoutModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatBadgeModule,
        MatTabsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:3000'],
                blacklistedRoutes: ['localhost:3000/auth/']
            }
        })
    ],
    providers: [ValidateService, AuthService, AuthGuard, RoleGuard, LoginGuard],
    bootstrap: [AppComponent],
    entryComponents: [
        StudentDetailsComponent, MentorDetailsComponent, CommentComponent, ConfirmComponent
    ]
})

export class AppModule {
}
