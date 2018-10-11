(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-navbar></app-navbar>-->\n<main-nav>\n  <div class=\"container-fluid\"  style=\"margin: 15px\">\n    <div class=\"row\">\n      <div *ngIf=\"authService.loggedIn(); then withLogin else withOutLogin\">\n\n      </div>\n      <ng-template #withOutLogin>\n        <div  class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-1 main\">\n          <router-outlet></router-outlet>\n        </div>\n      </ng-template>\n\n      <ng-template #withLogin>\n        <!--<app-sidebar></app-sidebar>-->\n\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n\n          <router-outlet></router-outlet>\n\n        </div>\n      </ng-template>\n\n\n    </div>\n\n\n  </div>\n</main-nav>\n\n\n<!--<footer  class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">-->\n  <!--<flash-messages></flash-messages>-->\n<!--</footer>-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'app';
        this.name = 'Angular 4';
        this._opened = true;
    }
    AppComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_student_register_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/student/register/student-register/student-register.component */ "./src/app/components/student/register/student-register/student-register.component.ts");
/* harmony import */ var _components_mentor_register_mentor_register_mentor_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mentor/register/mentor-register/mentor-register.component */ "./src/app/components/mentor/register/mentor-register/mentor-register.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/admin-register/admin-register.component */ "./src/app/components/admin/admin-register/admin-register.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/admin-list/admin-list.component */ "./src/app/components/admin/admin-list/admin-list.component.ts");
/* harmony import */ var _components_admin_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/admin-edit/admin-edit.component */ "./src/app/components/admin/admin-edit/admin-edit.component.ts");
/* harmony import */ var _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/student/student-list/student-list.component */ "./src/app/components/student/student-list/student-list.component.ts");
/* harmony import */ var _components_student_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/student/student-edit/student-edit.component */ "./src/app/components/student/student-edit/student-edit.component.ts");
/* harmony import */ var _components_mentor_mentor_list_mentor_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mentor/mentor-list/mentor-list.component */ "./src/app/components/mentor/mentor-list/mentor-list.component.ts");
/* harmony import */ var _components_mentor_mentor_edit_mentor_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mentor/mentor-edit/mentor-edit.component */ "./src/app/components/mentor/mentor-edit/mentor-edit.component.ts");
/* harmony import */ var _components_subjects_subject_register_subject_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/subjects/subject-register/subject-register.component */ "./src/app/components/subjects/subject-register/subject-register.component.ts");
/* harmony import */ var _components_subjects_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/subjects/subject-list/subject-list.component */ "./src/app/components/subjects/subject-list/subject-list.component.ts");
/* harmony import */ var _components_subjects_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/subjects/subject-edit/subject-edit.component */ "./src/app/components/subjects/subject-edit/subject-edit.component.ts");
/* harmony import */ var _components_resources_online_online_register_online_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/resources/online/online-register/online-register.component */ "./src/app/components/resources/online/online-register/online-register.component.ts");
/* harmony import */ var _components_resources_online_online_edit_online_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/resources/online/online-edit/online-edit.component */ "./src/app/components/resources/online/online-edit/online-edit.component.ts");
/* harmony import */ var _components_resources_online_online_list_online_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/resources/online/online-list/online-list.component */ "./src/app/components/resources/online/online-list/online-list.component.ts");
/* harmony import */ var _components_resources_local_local_register_local_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/resources/local/local-register/local-register.component */ "./src/app/components/resources/local/local-register/local-register.component.ts");
/* harmony import */ var _components_resources_local_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/resources/local/local-edit/local-edit.component */ "./src/app/components/resources/local/local-edit/local-edit.component.ts");
/* harmony import */ var _components_resources_local_local_list_local_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/resources/local/local-list/local-list.component */ "./src/app/components/resources/local/local-list/local-list.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _components_dashboard_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/dashboard/student-dashboard/student-dashboard.component */ "./src/app/components/dashboard/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _components_dashboard_student_dashboard_student_enrollment_student_enrollment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/dashboard/student-dashboard/student-enrollment/student-enrollment.component */ "./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.ts");
/* harmony import */ var _components_dashboard_mentor_dashboard_mentor_dashboard_mentor_dashboard_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component */ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.ts");
/* harmony import */ var _components_dashboard_mentor_dashboard_mentor_dashboard_select_subject_select_subject_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component */ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.ts");
/* harmony import */ var _components_mentor_mentor_assignment_mentor_assignment_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/mentor/mentor-assignment/mentor-assignment.component */ "./src/app/components/mentor/mentor-assignment/mentor-assignment.component.ts");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_mentoring_meeting_create_mentoring_meeting_create_mentoring_meeting_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component */ "./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.ts");
/* harmony import */ var _components_surveys_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/surveys/create-survey/create-survey.component */ "./src/app/components/surveys/create-survey/create-survey.component.ts");
/* harmony import */ var _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/star-rating/star-rating.component */ "./src/app/components/star-rating/star-rating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_36__["LoginGuard"]] },
    { path: 'student-register', component: _components_student_register_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_13__["StudentRegisterComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_36__["LoginGuard"]] },
    { path: 'mentor-register', component: _components_mentor_register_mentor_register_mentor_register_component__WEBPACK_IMPORTED_MODULE_14__["MentorRegisterComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_36__["LoginGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_36__["LoginGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'admin-register', component: _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_16__["AdminRegisterComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'admin-list', component: _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_18__["AdminListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'admin-list/:id', component: _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_18__["AdminListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'admin-edit/:id', component: _components_admin_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdminEditComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'student-list', component: _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__["StudentListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'student-list/:id', component: _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__["StudentListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'student-edit/:id', component: _components_student_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_21__["StudentEditComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'mentor-list', component: _components_mentor_mentor_list_mentor_list_component__WEBPACK_IMPORTED_MODULE_22__["MentorListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'mentor-list/:id', component: _components_mentor_mentor_list_mentor_list_component__WEBPACK_IMPORTED_MODULE_22__["MentorListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'mentor-edit/:id', component: _components_mentor_mentor_edit_mentor_edit_component__WEBPACK_IMPORTED_MODULE_23__["MentorEditComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'subject-edit/:id', component: _components_subjects_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_26__["SubjectEditComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'subject-list/:id', component: _components_subjects_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_25__["SubjectListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'subject-list', component: _components_subjects_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_25__["SubjectListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'subject-register', component: _components_subjects_subject_register_subject_register_component__WEBPACK_IMPORTED_MODULE_24__["SubjectRegisterComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'online-register', component: _components_resources_online_online_register_online_register_component__WEBPACK_IMPORTED_MODULE_27__["OnlineRegisterComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'online-edit/:id', component: _components_resources_online_online_edit_online_edit_component__WEBPACK_IMPORTED_MODULE_28__["OnlineEditComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'online-list/:id', component: _components_resources_online_online_list_online_list_component__WEBPACK_IMPORTED_MODULE_29__["OnlineListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'online-list', component: _components_resources_online_online_list_online_list_component__WEBPACK_IMPORTED_MODULE_29__["OnlineListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'local-register', component: _components_resources_local_local_register_local_register_component__WEBPACK_IMPORTED_MODULE_30__["LocalRegisterComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'local-edit/:id', component: _components_resources_local_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_31__["LocalEditComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'local-list/:id', component: _components_resources_local_local_list_local_list_component__WEBPACK_IMPORTED_MODULE_32__["LocalListComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'local-list', component: _components_resources_local_local_list_local_list_component__WEBPACK_IMPORTED_MODULE_32__["LocalListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'student-dashboard/:id', component: _components_dashboard_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["StudentDashboardComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'student' } },
    { path: 'student-dashboard', component: _components_dashboard_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["StudentDashboardComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'student' } },
    { path: 'student-enrollment', component: _components_dashboard_student_dashboard_student_enrollment_student_enrollment_component__WEBPACK_IMPORTED_MODULE_38__["StudentEnrollmentComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'student' } },
    { path: 'mentor-dashboard', component: _components_dashboard_mentor_dashboard_mentor_dashboard_mentor_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["MentorDashboardComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'mentor' } },
    { path: 'mentor-assignment', component: _components_mentor_mentor_assignment_mentor_assignment_component__WEBPACK_IMPORTED_MODULE_41__["MentorAssignmentComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'admin' } },
    { path: 'select-subject', component: _components_dashboard_mentor_dashboard_mentor_dashboard_select_subject_select_subject_component__WEBPACK_IMPORTED_MODULE_40__["SelectSubjectComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'mentor' } },
    { path: 'select-subject/:id', component: _components_dashboard_mentor_dashboard_mentor_dashboard_select_subject_select_subject_component__WEBPACK_IMPORTED_MODULE_40__["SelectSubjectComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'mentor' } },
    { path: 'create-mentoring-meeting/:id', component: _components_mentoring_meeting_create_mentoring_meeting_create_mentoring_meeting_component__WEBPACK_IMPORTED_MODULE_46__["CreateMentoringMeetingComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'mentor' } },
    { path: 'create-survey/:id', component: _components_surveys_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_47__["CreateSurveyComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { expectedRole: 'student' } },
    { path: 'page-not-found', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_45__["PageNotFoundComponent"] }
];
function tokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _components_student_register_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_13__["StudentRegisterComponent"],
                _components_mentor_register_mentor_register_mentor_register_component__WEBPACK_IMPORTED_MODULE_14__["MentorRegisterComponent"],
                _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_16__["AdminRegisterComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_15__["DataTableComponent"],
                _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_18__["AdminListComponent"],
                _components_admin_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdminEditComponent"],
                _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__["StudentListComponent"],
                _components_student_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_21__["StudentEditComponent"],
                _components_mentor_mentor_list_mentor_list_component__WEBPACK_IMPORTED_MODULE_22__["MentorListComponent"],
                _components_mentor_mentor_edit_mentor_edit_component__WEBPACK_IMPORTED_MODULE_23__["MentorEditComponent"],
                _components_subjects_subject_register_subject_register_component__WEBPACK_IMPORTED_MODULE_24__["SubjectRegisterComponent"],
                _components_subjects_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_25__["SubjectListComponent"],
                _components_subjects_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_26__["SubjectEditComponent"],
                _components_resources_online_online_register_online_register_component__WEBPACK_IMPORTED_MODULE_27__["OnlineRegisterComponent"],
                _components_resources_online_online_edit_online_edit_component__WEBPACK_IMPORTED_MODULE_28__["OnlineEditComponent"],
                _components_resources_online_online_list_online_list_component__WEBPACK_IMPORTED_MODULE_29__["OnlineListComponent"],
                _components_resources_local_local_register_local_register_component__WEBPACK_IMPORTED_MODULE_30__["LocalRegisterComponent"],
                _components_resources_local_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_31__["LocalEditComponent"],
                _components_resources_local_local_list_local_list_component__WEBPACK_IMPORTED_MODULE_32__["LocalListComponent"],
                _components_dashboard_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["StudentDashboardComponent"],
                _components_dashboard_student_dashboard_student_enrollment_student_enrollment_component__WEBPACK_IMPORTED_MODULE_38__["StudentEnrollmentComponent"],
                _components_dashboard_mentor_dashboard_mentor_dashboard_mentor_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["MentorDashboardComponent"],
                _components_dashboard_mentor_dashboard_mentor_dashboard_select_subject_select_subject_component__WEBPACK_IMPORTED_MODULE_40__["SelectSubjectComponent"],
                _components_mentor_mentor_assignment_mentor_assignment_component__WEBPACK_IMPORTED_MODULE_41__["MentorAssignmentComponent"],
                _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_42__["MainNavComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_45__["PageNotFoundComponent"],
                _components_mentoring_meeting_create_mentoring_meeting_create_mentoring_meeting_component__WEBPACK_IMPORTED_MODULE_46__["CreateMentoringMeetingComponent"],
                _components_surveys_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_47__["CreateSurveyComponent"],
                _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_48__["StarRatingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_33__["FileUploadModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_43__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_44__["MatProgressBarModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_34__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:3000'],
                        blacklistedRoutes: ['localhost:3000/auth/']
                    }
                })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_8__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"], _guards_login_guard__WEBPACK_IMPORTED_MODULE_36__["LoginGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-edit/admin-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/admin-edit/admin-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-edit/admin-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-edit/admin-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit Admin</h2>\n\n<form class=\"example-form\" (submit)=\"updateAdmin(admin._id)\" #formList=\"ngForm\">\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"admin.name\" name=\"name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"admin.email\" name=\"email\">\n    </mat-form-field>\n\n    <!--<mat-form-field class=\"example-full-width\">-->\n        <!--<input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"admin.password\" name=\"password\"-->\n               <!--autocomplete=\"true\">-->\n    <!--</mat-form-field>-->\n\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        <button style=\"margin-left: 10px\" mat-raised-button color=\"warn\" [routerLink]=\"['/admin-list']\" >Cancel</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/admin/admin-edit/admin-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-edit/admin-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditComponent", function() { return AdminEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminEditComponent = /** @class */ (function () {
    function AdminEditComponent(adminService, route, activatedRoute, snackBar) {
        this.adminService = adminService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.admin = {};
    }
    AdminEditComponent.prototype.ngOnInit = function () {
        this.getAdmin(this.activatedRoute.snapshot.params['id']);
    };
    AdminEditComponent.prototype.getAdmin = function (id) {
        var _this = this;
        this.adminService.getAdmin(id).then(function (res) {
            _this.admin = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminEditComponent.prototype.updateAdmin = function (id) {
        var _this = this;
        this.adminService.editAdmin(id, this.admin).then(function (result) {
            _this.route.navigate(['/admin-list']);
            _this.snackBar.open('User updated!', null, { duration: 1500 });
        }, function (err) {
            console.log(err);
        });
    };
    AdminEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-edit',
            template: __webpack_require__(/*! ./admin-edit.component.html */ "./src/app/components/admin/admin-edit/admin-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit.component.css */ "./src/app/components/admin/admin-edit/admin-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AdminEditComponent);
    return AdminEditComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-list/admin-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/admin-list/admin-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-list/admin-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-list/admin-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">System Admins</h1>\n<div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/admin-register']\" style=\"float:right;\">New Admin</button>\n</div>\n\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n    <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n        </ng-container>\n\n        <!-- Email Column -->\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.email}}</td>\n        </ng-container>\n\n        <!-- Edit Column -->\n        <ng-container matColumnDef=\"edit\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Edit</th>\n            <td mat-cell *matCellDef=\"let row\"> <a [routerLink]=\"['/admin-edit', row._id]\">\n                <mat-icon style=\"color: darkgreen\">edit</mat-icon>\n            </a>\n\n            </td>\n        </ng-container>\n\n        <!-- Delete Column -->\n        <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>\n            <td mat-cell *matCellDef=\"let row\"><a (click)=\"deleteAdmin(row._id)\" >\n                <mat-icon style=\"color: red\">delete</mat-icon>\n            </a>\n\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n    </table>\n\n\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin/admin-list/admin-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-list/admin-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminListComponent = /** @class */ (function () {
    function AdminListComponent(adminService, router, snackBar) {
        var _this = this;
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'email', 'edit', 'delete'];
        this.i = 0;
        this.isDataLoaded = false;
        this.admins = [];
        this.adminService.getAdmins()
            .subscribe(function (admins) {
            _this.admins = admins;
            _this.users = [];
            for (_this.i = 0; _this.i < _this.admins.length; _this.i++) {
                _this.users.push({
                    id: _this.i + 1,
                    _id: _this.admins[_this.i]._id,
                    name: _this.admins[_this.i].name,
                    email: _this.admins[_this.i].email
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    AdminListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdminListComponent.prototype.deleteAdmin = function (id) {
        var _this = this;
        this.adminService.deleteAdmin(id).then(function (result) {
            _this.router.navigate(['/admin-list']);
            _this.snackBar.open('User deleted!', 'Dimiss', { duration: 2000 });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AdminListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AdminListComponent.prototype, "sort", void 0);
    AdminListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-list',
            template: __webpack_require__(/*! ./admin-list.component.html */ "./src/app/components/admin/admin-list/admin-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-list.component.css */ "./src/app/components/admin/admin-list/admin-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_0__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AdminListComponent);
    return AdminListComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-register/admin-register.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/admin-register/admin-register.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-register/admin-register.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-register/admin-register.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h1\">Admin Registration</h2>\n\n<form (submit)=\"onRegisterSubmit(formList)\" #formList=\"ngForm\" class=\"example-form\">\n\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"email\" name=\"email\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\"\n               autocomplete=\"true\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\"\n               name=\"confirmPassword\" autocomplete=\"true\">\n    </mat-form-field>\n\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        <button mat-raised-button color=\"warn\" style=\"margin: 10px;\" [routerLink]=\"['/admin-list']\">Cancel</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n\n</form>"

/***/ }),

/***/ "./src/app/components/admin/admin-register/admin-register.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-register/admin-register.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisterComponent", function() { return AdminRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRegisterComponent = /** @class */ (function () {
    function AdminRegisterComponent(router, adminService, validateService, snackBar) {
        this.router = router;
        this.adminService = adminService;
        this.validateService = validateService;
        this.snackBar = snackBar;
    }
    AdminRegisterComponent.prototype.onRegisterSubmit = function (formList) {
        var _this = this;
        var admin = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegister(admin)) {
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(admin.email)) {
            return false;
        }
        // Match password
        if (this.password !== this.confirmPassword) {
            return false;
        }
        this.adminService.registerAdmin(admin).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('New admin is added!', 'Dismiss', { duration: 2000 });
                _this.router.navigate(['/admin-list']);
            }
            else {
                _this.snackBar.open('Something went wrong', 'Dismiss', { duration: 2000 });
            }
        });
    };
    AdminRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-register',
            template: __webpack_require__(/*! ./admin-register.component.html */ "./src/app/components/admin/admin-register/admin-register.component.html"),
            styles: [__webpack_require__(/*! ./admin-register.component.css */ "./src/app/components/admin/admin-register/admin-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AdminRegisterComponent);
    return AdminRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"mat-h1\">Students waiting to be assigned a mentor</h2>\n\n<div *ngIf=\"hasStudents\">\n    <mat-form-field >\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\" >\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- Number Column -->\n            <ng-container matColumnDef=\"id\" >\n                <th mat-header-cell *matHeaderCellDef mat-sort-header > No.</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.id+1}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n            </ng-container>\n\n            <!-- Phone Column -->\n            <ng-container matColumnDef=\"phone\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.phone}}</td>\n            </ng-container>\n            <!-- Country Column -->\n            <ng-container matColumnDef=\"country\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Country</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.country}}</td>\n            </ng-container>\n            <!-- Subject Column -->\n            <ng-container matColumnDef=\"subject\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Subject </th>\n                <td mat-cell *matCellDef=\"let row\">{{row.subject_name}}</td>\n            </ng-container>\n\n            <!-- Delete Column -->\n            <ng-container matColumnDef=\"assign\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Assign Mentor</th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button mat-button color=\"primary\" (click)=\"assignMentor(row.id)\">Assign</button>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n        </table>\n\n\n        <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n    </div>\n</div>\n\n\n<mat-label *ngIf=\"!hasStudents\"><i>There are no students waiting to be assigned a mentor!</i></mat-label>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, studentSubjectService) {
        var _this = this;
        this.router = router;
        this.studentSubjectService = studentSubjectService;
        this.displayedColumns = ['id', 'name', 'phone', 'country', 'subject', 'assign'];
        this.hasStudents = true;
        this.subjectsArray = [];
        this.studentSubjectService.getUnassignedStudentSubjects()
            .subscribe(function (data) {
            if (data['length'] == 0) {
                _this.hasStudents = false;
            }
            for (var index in data) {
                _this.subjectsArray.push({
                    id: Number(index),
                    _id: data[index]._id,
                    name: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    phone: data[index].student['length'] !== 0 ? data[index].student[0].phone : '',
                    country: data[index].student['length'] !== 0 ? data[index].student[0].country : '',
                    subject_name: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    subject: data[index].subject['length'] !== 0 ? data[index].subject[0] : '',
                    student: data[index].student['length'] !== 0 ? data[index].student[0] : '',
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.subjectsArray);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DashboardComponent.prototype.assignMentor = function (data) {
        localStorage.setItem('assignment_data', JSON.stringify(this.subjectsArray[data]));
        this.router.navigate(['/mentor-assignment']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_0__["StudentSubjectService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Your Classes</h1>\n<!--<div class=\"button-row\">-->\n    <!--<button mat-raised-button color=\"primary\" [routerLink]=\"['/select-subject']\" style=\"float:right;\">Select Your Subjects</button>-->\n<!--</div>-->\n\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8 \">\n    <table *ngIf=\"true\"  mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"id\" >\n            <th mat-header-cell *matHeaderCellDef mat-sort-header > No.</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.id+1}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"subject\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.subject}}</td>\n        </ng-container>\n\n        <!-- Phone Column -->\n        <ng-container matColumnDef=\"student\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Student</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.student}}</td>\n        </ng-container>\n        <!-- Country Column -->\n        <ng-container matColumnDef=\"start_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.start_date}}</td>\n        </ng-container>\n        <!-- Subject Column -->\n        <ng-container matColumnDef=\"end_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>End Date</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.end_date}}</td>\n        </ng-container>\n        <!--Progress Column-->\n        <ng-container matColumnDef=\"progress\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Progress</th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{row.progress}} %\n                <mat-progress-bar\n                        class=\"example-margin\"\n                        color=\"primary\"\n                        mode=\"determinate\"\n                        value=\"{{row.progress}}\"\n                        bufferValue=\"75\">\n                </mat-progress-bar>\n            </td>\n        </ng-container>\n        <!-- Delete Column -->\n        <ng-container matColumnDef=\"mentoring_meeting\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Mentoring Meeting</th>\n            <td mat-cell *matCellDef=\"let row\">\n                <button mat-button color=\"primary\" [routerLink]=\"['/create-mentoring-meeting', row._id]\">Write</button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n    </table>\n\n\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MentorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorDashboardComponent", function() { return MentorDashboardComponent; });
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MentorDashboardComponent = /** @class */ (function () {
    function MentorDashboardComponent(studentSubjectService, router) {
        var _this = this;
        this.studentSubjectService = studentSubjectService;
        this.router = router;
        this.displayedColumns = ['id', 'subject', 'student', 'start_date', 'end_date', 'progress', 'mentoring_meeting'];
        var userTypeToken = JSON.parse(localStorage.getItem('user'));
        this.subjectsArray = [];
        this.studentSubjectService.getStudentSubjectsByMentorId('/' + userTypeToken.id)
            .subscribe(function (data) {
            for (var index in data) {
                _this.subjectsArray.push({
                    id: Number(index),
                    _id: data[index]._id,
                    student: data[index].student['length'] !== 0 ? data[index].student[0].name : '',
                    subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    start_date: data[index].start_date,
                    end_date: data[index].end_date,
                    progress: data[index].mentoringmeeting['length'] !== 0 ?
                        Math.round((data[index].mentoringmeeting[0].section / data[index].subject[0].sections) * 100) : '0',
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.subjectsArray);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    MentorDashboardComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MentorDashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MentorDashboardComponent.prototype, "sort", void 0);
    MentorDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-mentor-dashboard',
            template: __webpack_require__(/*! ./mentor-dashboard.component.html */ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./mentor-dashboard.component.css */ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/mentor-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_0__["StudentSubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MentorDashboardComponent);
    return MentorDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Select the subjects you are willing to teach</h1>\n<hr />\n<br/>\n\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position+1}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef> Select</th>\n        <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox [disabled]=\"row.checked\"\n                          (change)=\"toggle(row)\"\n                          [checked]=\"row.checked\">\n            </mat-checkbox>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n        (click)=\"selection.toggle(row)\">\n    </tr>\n</table>\n<br/>\n<div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" disabled=\"{{!enableSaveButton}}\" (click)=\"onRegisterSubmit()\" style=\"float:right;\">Save</button>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SelectSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSubjectComponent", function() { return SelectSubjectComponent; });
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _services_mentor_subject_mentor_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/mentor-subject/mentor-subject.service */ "./src/app/services/mentor-subject/mentor-subject.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectSubjectComponent = /** @class */ (function () {
    function SelectSubjectComponent(subjectService, mentorSubjectService, snackBar) {
        var _this = this;
        this.subjectService = subjectService;
        this.mentorSubjectService = mentorSubjectService;
        this.snackBar = snackBar;
        this.displayedColumns = ['position', 'name', 'select'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.i = 0;
        this.j = 0;
        this.enableSaveButton = false;
        this.alreadyHasSubjects = false;
        this.selectedSubjects = [];
        this.mentor_id = JSON.parse(localStorage.getItem('user')).id;
        this.mentor_subjects = [];
        this.mentorSubjectService.getMentorSubjects(this.mentor_id).subscribe(function (data) {
            if (data['length'] !== 0) {
                _this.mentor_subjects = data[0].subjects;
                _this.mentor_subject_id = data[0]._id;
            }
            // console.log(data);
        });
        this.subjectService.getSubjects().subscribe(function (data) {
            _this.subjects = [];
            for (_this.i = 0; _this.i < data['length']; _this.i++) {
                _this.subjects.push({
                    id: data[_this.i]._id,
                    position: _this.i,
                    name: data[_this.i].name,
                    checked: false
                });
                if (_this.mentor_subjects.length !== 0) {
                    for (_this.j = 0; _this.j < _this.mentor_subjects.length; _this.j++) {
                        if (data[_this.i]._id === _this.mentor_subjects[_this.j]) {
                            _this.subjects[_this.i].checked = true;
                            _this.alreadyHasSubjects = true;
                        }
                    }
                }
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.subjects);
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    SelectSubjectComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SelectSubjectComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    SelectSubjectComponent.prototype.toggle = function (row) {
        if (!this.subjects[row.position].checked) {
            this.subjects[row.position].checked = true;
        }
        else {
            this.subjects[row.position].checked = false;
        }
        this.enableSaveButton = true;
    };
    SelectSubjectComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.subjects_id = [];
        for (var index in this.subjects) {
            if (this.subjects[index].checked) {
                this.subjects_id.push(this.subjects[index].id);
            }
        }
        var mentor_selected_subject = {
            mentor_id: this.mentor_id,
            subjects: this.subjects_id
        };
        if (this.alreadyHasSubjects) {
            console.log(this.mentor_subject_id);
            this.mentorSubjectService.editMentorSubject(this.mentor_subject_id, mentor_selected_subject);
        }
        else {
            this.mentorSubjectService.registerMentorSubject(mentor_selected_subject).subscribe(function (data) {
                if (data['success']) {
                    _this.snackBar.open('Subjects selected!', null, { duration: 1500 });
                    // this.router.navigate(['/mentor-dashboard']);
                }
                else {
                    _this.snackBar.open('Something went wrong!', 'Dismiss', { duration: 2000 });
                }
            });
        }
    };
    SelectSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-select-subject',
            template: __webpack_require__(/*! ./select-subject.component.html */ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.html"),
            styles: [__webpack_require__(/*! ./select-subject.component.css */ "./src/app/components/dashboard/mentor-dashboard/mentor-dashboard/select-subject/select-subject.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subject_service__WEBPACK_IMPORTED_MODULE_0__["SubjectService"],
            _services_mentor_subject_mentor_subject_service__WEBPACK_IMPORTED_MODULE_1__["MentorSubjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SelectSubjectComponent);
    return SelectSubjectComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/student-dashboard/student-dashboard.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboard/student-dashboard/student-dashboard.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/student-dashboard/student-dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/student-dashboard/student-dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Your Classes</h1>\n<div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/student-enrollment']\" style=\"float:right;\">New Enrollment</button>\n</div>\n\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8 \">\n    <table  mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"id\" >\n            <th mat-header-cell *matHeaderCellDef mat-sort-header >No.</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"subject\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.subject}}</td>\n        </ng-container>\n\n        <!-- Phone Column -->\n        <ng-container matColumnDef=\"mentor\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Mentor</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.mentor}}</td>\n        </ng-container>\n        <!-- Country Column -->\n        <ng-container matColumnDef=\"start_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.start_date}}</td>\n        </ng-container>\n        <!-- Subject Column -->\n        <ng-container matColumnDef=\"end_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>End Date</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.end_date}}</td>\n        </ng-container>\n        <!-- Subject Column -->\n        <ng-container matColumnDef=\"progress\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Progress</th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{row.progress}} %\n                <mat-progress-bar\n                    class=\"example-margin\"\n                    color=\"primary\"\n                    mode=\"determinate\"\n                    value=\"{{row.progress}}\"\n                    bufferValue=\"75\">\n            </mat-progress-bar>\n            </td>\n\n        </ng-container>\n\n        <ng-container matColumnDef=\"survey\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"padding-left: 15px\"> Survey</th>\n            <td mat-cell *matCellDef=\"let row\">\n                <button disabled=\"{{!row.teacher_assigned}}\" mat-button color=\"primary\" [routerLink]=\"['/create-survey', row._id]\">Write Survey</button>\n            </td>\n        </ng-container>\n\n        <!-- Delete Column -->\n        <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"padding-left: 15px\"> Delete</th>\n            <td mat-cell *matCellDef=\"let row\">\n                <button disabled=\"{{row.teacher_assigned}}\" color=\"warn\" mat-button  style=\"width: 20px !important;\" (click)=\"deleteSubject(row)\">\n                    <mat-icon >delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n    </table>\n\n\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/student-dashboard/student-dashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/student-dashboard/student-dashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StudentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function() { return StudentDashboardComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentDashboardComponent = /** @class */ (function () {
    function StudentDashboardComponent(studentSubjectService, router) {
        this.studentSubjectService = studentSubjectService;
        this.router = router;
        this.displayedColumns = ['id', 'subject', 'mentor', 'start_date', 'end_date', 'progress', 'survey', 'delete'];
        this.getStudentSubject();
    }
    StudentDashboardComponent.prototype.getStudentSubject = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        var userTypeToken = JSON.parse(localStorage.getItem('user'));
        this.subjectsArray = [];
        this.studentSubjectService.getStudentSubjectsByStudentId("/" + userTypeToken.id).subscribe(function (data) {
            for (var index in data) {
                _this.subjectsArray.push({
                    id: Number(index) + 1,
                    _id: data[index]._id,
                    mentor: data[index].mentor['length'] !== 0 ? data[index].mentor[0].name : '',
                    subject: data[index].subject['length'] !== 0 ? data[index].subject[0].name : '',
                    start_date: data[index].start_date,
                    end_date: data[index].end_date,
                    progress: data[index].mentoringmeeting['length'] !== 0 ?
                        Math.round((data[index].mentoringmeeting[0].section / data[index].subject[0].sections) * 100) : '0',
                    teacher_assigned: data[index].teacher_assigned
                });
                console.log(data[index].mentoringmeeting['length'] !== 0 ? data[index].mentoringmeeting[0].section : '');
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.subjectsArray);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    StudentDashboardComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StudentDashboardComponent.prototype.deleteSubject = function (row) {
        var _this = this;
        this.studentSubjectService.deleteStudentSubject(row._id).then(function (data) {
            _this.router.navigate(['/student-dashboard']);
        });
        this.subjectsArray.splice(row.id - 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.subjectsArray);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StudentDashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], StudentDashboardComponent.prototype, "sort", void 0);
    StudentDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-dashboard',
            template: __webpack_require__(/*! ./student-dashboard.component.html */ "./src/app/components/dashboard/student-dashboard/student-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./student-dashboard.component.css */ "./src/app/components/dashboard/student-dashboard/student-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_3__["StudentSubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h2\" >Select a subject to study</h2>\n\n\n<form class=\"example-form\" (submit)=\"onRegisterSubmit()\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-select [(ngModel)]=\"subject_id\" name=\"subject_id\"  placeholder=\"Type\">\n      <mat-option *ngFor=\"let subject of subjects\" [value]=\"subject._id\">{{subject.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br/>\n  <br/>\n  <br/>\n\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n  </div>\n  <br/>\n  <br/>\n  <br/></form>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEnrollmentComponent", function() { return StudentEnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentEnrollmentComponent = /** @class */ (function () {
    function StudentEnrollmentComponent(subjectService, studentSubjectService, snackBar, router) {
        var _this = this;
        this.subjectService = subjectService;
        this.studentSubjectService = studentSubjectService;
        this.snackBar = snackBar;
        this.router = router;
        this.subjectService.getSubjects()
            .subscribe(function (subjects) {
            _this.subjects = subjects;
        });
    }
    StudentEnrollmentComponent.prototype.onRegisterSubmit = function (formList) {
        var _this = this;
        var subject = {
            subject_id: this.subject_id,
            student_id: JSON.parse(localStorage.getItem('user')).id
        };
        this.studentSubjectService.registerStudentSubject(subject).subscribe(function (data) {
            if (data['success']) {
                _this.router.navigate(['/student-dashboard']);
                _this.snackBar.open('New subject selected!', null, { duration: 2000 });
            }
            else {
                _this.snackBar.open('Something went wrong!', null, { duration: 2000 });
            }
        });
    };
    StudentEnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-enrollment',
            template: __webpack_require__(/*! ./student-enrollment.component.html */ "./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.html"),
            styles: [__webpack_require__(/*! ./student-enrollment.component.css */ "./src/app/components/dashboard/student-dashboard/student-enrollment/student-enrollment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"], _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_3__["StudentSubjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentEnrollmentComponent);
    return StudentEnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n\n<form (submit)=\"onLoginSubmit()\" class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n        <mat-select [(ngModel)]=\"type\" name=\"type\" placeholder=\"Type\">\n            <mat-option value=\"admin\">Admin</mat-option>\n            <mat-option value=\"mentor\">Mentor</mat-option>\n            <mat-option value=\"student\">Student</mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"email\" name=\"email\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\"\n               autocomplete=\"true\">\n    </mat-form-field>\n\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mentor.service */ "./src/app/services/mentor.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(studentService, mentorService, adminService, router, snackBar) {
        this.studentService = studentService;
        this.mentorService = mentorService;
        this.adminService = adminService;
        this.router = router;
        this.snackBar = snackBar;
        this.type = 'admin';
    }
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (this.type === 'mentor') {
            this.mentorService.authenticateMentor(user).subscribe(function (data) {
                if (data['success']) {
                    _this.mentorService.storeMentorData(data['token'], data['mentor']);
                    _this.router.navigate(['mentor-dashboard']);
                }
                else {
                    _this.snackBar.open('Login Failed', 'Dismiss', { duration: 2000 });
                    _this.router.navigate(['login']);
                }
            });
        }
        else if (this.type === 'student') {
            this.studentService.authenticateStudent(user).subscribe(function (data) {
                if (data['success']) {
                    _this.studentService.storeStudentData(data['token'], data['student']);
                    _this.router.navigate(['student-dashboard']);
                }
                else {
                    _this.router.navigate(['login']);
                    _this.snackBar.open('Login Failed', 'Dismiss', { duration: 2000 });
                }
            });
        }
        else if (this.type === 'admin') {
            this.adminService.authenticateAdmin(user).subscribe(function (data) {
                if (data['success']) {
                    _this.adminService.storeAdminData(data['token'], data['admin']);
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.snackBar.open('Login Failed', 'Dismiss', { duration: 2000 });
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
            _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.menu {\n  width: 200px;\n  /*margin-left: 200px;*/\n}\n\n.expansion-body {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.mat-nav-list a.active {\n  background: #b9b9b9;\n}\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav\n            #drawer\n            class=\"sidenav\"\n            fixedInViewport=\"true\"\n            [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n            [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n            [opened]=\"!(isHandset$ | async) && authService.loggedIn()\">\n        <mat-toolbar color=\"primary\">HBE\n        </mat-toolbar>\n\n        <mat-nav-list>\n            <a mat-list-item (click)=\"goToDashboard()\"  routerLinkActive=\"active\">Dashboard</a>\n            <a mat-list-item *ngIf=\"authService.getUserType()=='admin'\"  routerLinkActive=\"active\" [routerLink]=\"['/subject-list']\">Subjects</a>\n            <a mat-list-item  *ngIf=\"authService.getUserType()=='mentor'\" [routerLink]=\"['/select-subject']\" routerLinkActive=\"active\">My Subjects</a>\n            <mat-expansion-panel class=\"sidenav\" style=\"box-shadow: none;\">\n                <mat-expansion-panel-header style=\"padding-left: 0px !important;\">\n                    <a mat-list-item>Resources</a>\n                </mat-expansion-panel-header>\n                <mat-list-item [routerLink]=\"['/local-list']\" routerLinkActive=\"active\">Local</mat-list-item>\n                <mat-list-item [routerLink]=\"['/online-list']\" routerLinkActive=\"active\">Online</mat-list-item>\n            </mat-expansion-panel>\n            <mat-expansion-panel *ngIf=\"authService.getUserType()=='admin'\" class=\"sidenav\" style=\"box-shadow: none;\">\n                <mat-expansion-panel-header style=\"padding-left: 0px !important;\">\n                    <a mat-list-item>User Managment</a>\n                </mat-expansion-panel-header>\n                <a mat-list-item [routerLink]=\"['/student-list']\" routerLinkActive=\"active\">Students</a>\n                <a mat-list-item [routerLink]=\"['/mentor-list']\" routerLinkActive=\"active\">Mentors</a>\n                <a mat-list-item [routerLink]=\"['/admin-list']\" routerLinkActive=\"active\">Admins</a>\n            </mat-expansion-panel>\n            <a mat-list-item *ngIf=\"authService.getUserType()=='admin'\" routerLinkActive=\"active\">Reports</a>\n            <!--<a mat-list-item [routerLink]=\"['/profile']\" routerLinkActive=\"active\">Profile</a>-->\n            <a (click)=\"logout(drawer)\" mat-list-item>Logout</a>\n        </mat-nav-list>\n    </mat-sidenav>\n\n\n    <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n            <button\n                    type=\"button\"\n                    aria-label=\"Toggle sidenav\"\n                    mat-icon-button\n                    (click)=\"drawer.toggle()\"\n                    *ngIf=\"(isHandset$ | async) && authService.loggedIn()\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <span style=\"flex: auto\"></span>\n            <button *ngIf=\"!authService.loggedIn()\" mat-icon-button [matMenuTriggerFor]=\"menu\"\n                    style=\"margin-right: 20px; margin-right: 20px;\">\n                Signup\n            </button>\n            <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item class=\"dropdown-item\"\n                       [routerLink]=\"['/mentor-register']\">Mentor\n                </button>\n                <button mat-menu-item  class=\"dropdown-item\"\n                       [routerLink]=\"['/student-register']\">Student\n                </button>\n            </mat-menu>\n\n        </mat-toolbar>\n        <ng-content></ng-content>\n        <!-- Add Content Here -->\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, router, authService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.logout = function (drawer) {
        this.authService.logout();
        this.router.navigate(['/login']);
        drawer.close();
    };
    MainNavComponent.prototype.goToDashboard = function () {
        switch (this.authService.getUserType()) {
            case 'admin':
                this.router.navigate(['/dashboard']);
                break;
            case 'mentor':
                this.router.navigate(['/mentor-dashboard']);
                break;
            case 'student':
                this.router.navigate(['/student-dashboard']);
                break;
        }
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/components/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/mentor/mentor-assignment/mentor-assignment.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-assignment/mentor-assignment.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mentor/mentor-assignment/mentor-assignment.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-assignment/mentor-assignment.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Student Details</h1>\n\n<div class=\"row\" style=\"display: flex\">\n    <div style=\"flex: 3\">\n        <table style=\"border-right: 1px solid lightgray;\">\n            <tbody>\n            <tr>\n                <th style=\"border: none; text-align: left\">Name</th>\n                <td style=\"border: none; text-align: left\">{{student.name}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Contact</th>\n                <td style=\"border: none; text-align: left\">{{student.phone}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Email</th>\n                <td style=\"border: none; text-align: left\">{{student.email}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Parent's Cont.</th>\n                <td style=\"border: none; text-align: left\">{{student.parents_phone}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Gender</th>\n                <td style=\"border: none; text-align: left\">{{student.gender}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    <div style=\"flex: 3\">\n        <table style=\"border-right: 1px solid lightgray; margin-left: 10px;\">\n            <tbody>\n            <tr>\n                <th style=\"border: none; text-align: left\">Prf. Mentor Gender</th>\n                <td style=\"border: none; text-align: left\">{{student.tutor_gender}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Country</th>\n                <td style=\"border: none; text-align: left\">{{student.country}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Language</th>\n                <td style=\"border: none; text-align: left\">{{student.language}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">English Level</th>\n                <td style=\"border: none; text-align: left\">{{student.english_level}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">School</th>\n                <td style=\"border: none; text-align: left\">{{student.school_name}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    <div style=\"flex: 3; margin-left: 10px;\">\n        <table style=\"margin-left: 10px;\" >\n            <tbody>\n            <tr>\n                <th style=\"border: none; text-align: left\">School Level</th>\n                <td style=\"border: none; text-align: left\">{{student.school_level}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Address</th>\n                <td style=\"border: none; text-align: left\">{{student.address}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Pref. Mentoring Location</th>\n                <td style=\"border: none; text-align: left\">{{student.mentoring_address}}</td>\n            </tr>\n            <tr>\n                <th style=\"border: none; text-align: left\">Subject</th>\n                <td style=\"border: none; text-align: left\">{{subject.name}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<br/>\n<br/>\n\n<h1 class=\"mat-h1\">Select A Mentor</h1>\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8 \">\n    <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.id+1}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n        </ng-container>\n\n        <!-- Phone Column -->\n        <ng-container matColumnDef=\"phone\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.phone}}</td>\n        </ng-container>\n        <!-- Country Column -->\n        <ng-container matColumnDef=\"location\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Coverage & Transportation</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.location}}</td>\n        </ng-container>\n        <!-- Subject Column -->\n        <ng-container matColumnDef=\"starting_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Starting Date</th>\n            <td mat-cell *matCellDef=\"let row\">\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n            </td>\n        </ng-container>\n\n        <!-- Delete Column -->\n        <ng-container matColumnDef=\"assign\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Select Mentor</th>\n            <td mat-cell *matCellDef=\"let row\">\n                <button mat-button color=\"primary\" (click)=\"onAssignMentor(row._id)\">Select</button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n    </table>\n\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/components/mentor/mentor-assignment/mentor-assignment.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-assignment/mentor-assignment.component.ts ***!
  \************************************************************************************/
/*! exports provided: MentorAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorAssignmentComponent", function() { return MentorAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentor_subject_mentor_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/mentor-subject/mentor-subject.service */ "./src/app/services/mentor-subject/mentor-subject.service.ts");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mentor.service */ "./src/app/services/mentor.service.ts");
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MentorAssignmentComponent = /** @class */ (function () {
    function MentorAssignmentComponent(mentorSubjectService, mentorService, router, studentSubjectService, snackBar) {
        var _this = this;
        this.mentorSubjectService = mentorSubjectService;
        this.mentorService = mentorService;
        this.router = router;
        this.studentSubjectService = studentSubjectService;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'phone', 'location', 'starting_date', 'assign'];
        this.i = 0;
        this.student = JSON.parse(localStorage.getItem('assignment_data')).student;
        this.subject = JSON.parse(localStorage.getItem('assignment_data')).subject;
        this.student_subject_id = JSON.parse(localStorage.getItem('assignment_data'))._id;
        this.mentors = [];
        console.log(this.subject._id);
        this.mentorSubjectService.getMentorSubjectsBySubjectId(this.subject._id).subscribe(function (data) {
            console.log(data);
            _this.subject_mentors = data;
            _this.mentor_data = [];
            if (data['length'] !== 0) {
                _this.getMentors(_this.subject_mentors);
            }
        });
    }
    MentorAssignmentComponent.prototype.getMentors = function (mentor) {
        var _this = this;
        this.mentorService.getMentor(this.subject_mentors[this.i].mentor_id).then(function (mentor_data) {
            _this.mentors.push({
                id: _this.i,
                _id: mentor_data['_id'],
                name: mentor_data['name'],
                phone: mentor_data['phone'],
                location: mentor_data['location'],
                starting_date: mentor_data['starting_date']
            });
            _this.i++;
            if (_this.subject_mentors['length'] > _this.i) {
                _this.getMentors(_this.mentors);
            }
            else {
                console.log(_this.mentors);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.mentors);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        }, function (err) {
            console.log(err);
        });
    };
    MentorAssignmentComponent.prototype.ngOnInit = function () {
        this.today = new Date().toISOString().split('T')[0];
    };
    MentorAssignmentComponent.prototype.onAssignMentor = function (mentor_id) {
        var _this = this;
        var student_subject = {
            mentor_id: mentor_id,
            start_date: this.today,
            teacher_assigned: true
        };
        this.studentSubjectService.editStudentSubject(this.student_subject_id, student_subject).then(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.snackBar.open('Mentor assigned', null, { duration: 1500 });
        }, function (err) {
            console.log(err);
        });
    };
    MentorAssignmentComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], MentorAssignmentComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], MentorAssignmentComponent.prototype, "sort", void 0);
    MentorAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mentor-assignment',
            template: __webpack_require__(/*! ./mentor-assignment.component.html */ "./src/app/components/mentor/mentor-assignment/mentor-assignment.component.html"),
            styles: [__webpack_require__(/*! ./mentor-assignment.component.css */ "./src/app/components/mentor/mentor-assignment/mentor-assignment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mentor_subject_mentor_subject_service__WEBPACK_IMPORTED_MODULE_1__["MentorSubjectService"],
            _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__["MentorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_3__["StudentSubjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], MentorAssignmentComponent);
    return MentorAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/components/mentor/mentor-edit/mentor-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-edit/mentor-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mentor/mentor-edit/mentor-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-edit/mentor-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"mat-h2\">Edit Mentor</h2>\n  <form (submit)=\"updateMentor(mentor._id)\" class=\"example-form\">\n\n    <mat-form-field class=\"example-full-width\">\n       <input  matInput type=\"text\" placeholder=\"Name\"  [(ngModel)]=\"mentor.name\" name=\"name\" >\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"email\" [(ngModel)]=\"mentor.email\" name=\"email\" placeholder=\"Email\" >\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"phone\" [(ngModel)]=\"mentor.phone\" name=\"phone\" placeholder=\"Phone\">\n    </mat-form-field>\n    <mat-radio-group (change)=\"onChange($event)\" name=\"gender\">\n      <label style=\"color: gray;\">Gender : </label>\n      <mat-radio-button checked=\"{{mentor.gender=='male'}}\"  name=\"male\" value=\"male\" style=\"color: gray;\"> Male &nbsp;</mat-radio-button>\n      <mat-radio-button checked=\"{{mentor.gender=='female'}}\"  name=\"female\" value=\"female\" style=\"color: gray;\"> Female </mat-radio-button>\n    </mat-radio-group>\n\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\"[(ngModel)]=\"mentor.language\" name=\"language\" placeholder=\"Enter languages\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\" [(ngModel)]=\"mentor.location\" name=\"location\"\n             placeholder=\"Location (Please include how far you are willing to travel and whether you have access\n        to a mode of transport (car, bike, public transport))\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n    <input  matInput type=\"text\"[(ngModel)]=\"mentor.vce_subjects\" name=\"vce_subjects\"\n             placeholder=\"Which subjects did you study in VCE? What were your study scores for these subjects?\n        (skip if the question is not relevant to you)\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\" [(ngModel)]=\"mentor.studying\" name=\"studying\"\n             placeholder=\"Are you currently studying? If so, what are you studying? If not, what are your plans for 2018?\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\" [(ngModel)]=\"mentor.experience\" name=\"experience\" placeholder=\"Do you have any tutoring or mentoring experience? Please elaborate.\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\"[(ngModel)]=\"mentor.volunteering\" name=\"volunteering\"\n             placeholder=\"Do you have any other experience in volunteering or community work?\">\n    </mat-form-field>\n\n    <label style=\"color: gray;\">Do you have a working with children check? </label>\n\n    <mat-radio-group (change)=\"onChange($event)\" name='wwcc'>\n      <mat-radio-button checked=\"{{mentor.wwcc=='Yes'}}\" name=\"wwcc\" value=\"Yes\" style=\"color: gray;\"> Yes &nbsp;</mat-radio-button>\n      <mat-radio-button  name=\"wwcc\" checked=\"{{mentor.wwcc=='No'}}\" value=\"No\" style=\"color: gray;\"> No </mat-radio-button>\n      <mat-radio-button  name=\"wwcc\" checked=\"{{mentor.wwcc=='In process of obtaining one'}}\" value=\"In process of obtaining one\" style=\"color: gray;\"> In the process of ontaining one. </mat-radio-button>\n    </mat-radio-group>\n\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\" [(ngModel)]=\"mentor.why_join\" name=\"why_join\" class=\"form-control\" id=\"why_join\"\n             placeholder=\"Why do you want to join this program? (100-200 words)\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\"[(ngModel)]=\"mentor.about_us\" name=\"about_us\" class=\"form-control\" id=\"about_us\"\n             placeholder=\"Where did you hear about us?\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\" [(ngModel)]=\"mentor.refugee_definition\" name=\"refugee_definition\" placeholder=\"What does the term 'refugee' mean to you? (100-200 words)\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input  matInput type=\"text\"[(ngModel)]=\"mentor.preference\" name=\"preference\"\n             placeholder=\"Do you have any special preferences with regards to students? (e.g. 'not willing to\n        mentor VCE level students')\">\n    </mat-form-field>\n\n    <mat-checkbox [(ngModel)]=\"mentor.send_me_copy\"  name=\"send_me_copy\" style=\"color: gray;\">Send Me A Copy Of My Responses.</mat-checkbox>\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" >Save</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/mentor/mentor-edit/mentor-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-edit/mentor-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: MentorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorEditComponent", function() { return MentorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/mentor.service */ "./src/app/services/mentor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MentorEditComponent = /** @class */ (function () {
    function MentorEditComponent(mentorService, route, activatedRoute, snackBar) {
        this.mentorService = mentorService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.mentor = {};
    }
    MentorEditComponent.prototype.ngOnInit = function () {
        this.getMentor(this.activatedRoute.snapshot.params['id']);
    };
    MentorEditComponent.prototype.getMentor = function (id) {
        var _this = this;
        this.mentorService.getMentor(id).then(function (res) {
            _this.mentor = res;
        }, function (err) {
            console.log(err);
        });
    };
    MentorEditComponent.prototype.updateMentor = function (id) {
        var _this = this;
        this.mentorService.editMentor(id, this.mentor).then(function (result) {
            var id = result['_id'];
            _this.route.navigate(['/mentor-list']);
            _this.snackBar.open('Mentor updated!', null, { duration: 2000 });
        }, function (err) {
            console.log(err);
        });
    };
    MentorEditComponent.prototype.onChange = function (mrChange) {
        if (mrChange.source.name === 'wwcc') {
            this.mentor['wwcc'] = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.mentor['gender'] = mrChange.source.value;
        }
    };
    MentorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mentor-edit',
            template: __webpack_require__(/*! ./mentor-edit.component.html */ "./src/app/components/mentor/mentor-edit/mentor-edit.component.html"),
            styles: [__webpack_require__(/*! ./mentor-edit.component.css */ "./src/app/components/mentor/mentor-edit/mentor-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mentor_service__WEBPACK_IMPORTED_MODULE_1__["MentorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MentorEditComponent);
    return MentorEditComponent;
}());



/***/ }),

/***/ "./src/app/components/mentor/mentor-list/mentor-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-list/mentor-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mentor/mentor-list/mentor-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-list/mentor-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Registered Mentors</h1>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.email}}</td>\n    </ng-container>\n    <!-- Phone Column -->\n    <ng-container matColumnDef=\"phone\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.phone}}</td>\n    </ng-container>\n    <!-- Gender Column -->\n    <ng-container matColumnDef=\"gender\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Gender</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.gender}}</td>\n    </ng-container>\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.status}}</td>\n    </ng-container>\n    <!-- Edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Edit</th>\n      <td mat-cell *matCellDef=\"let row\"> <a [routerLink]=\"['/mentor-edit', row._id]\">\n        <mat-icon style=\"color: darkgreen\">edit</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <!-- Delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>\n      <td mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/mentor-list', row._id]\" (click)=\"deleteMentor(row._id)\" >\n        <mat-icon style=\"color: red\">delete</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mentor/mentor-list/mentor-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mentor/mentor-list/mentor-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MentorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorListComponent", function() { return MentorListComponent; });
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/mentor.service */ "./src/app/services/mentor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MentorListComponent = /** @class */ (function () {
    function MentorListComponent(mentorService, router) {
        var _this = this;
        this.mentorService = mentorService;
        this.router = router;
        this.displayedColumns = ['id', 'name', 'email', 'phone', 'gender', 'status', 'edit', 'delete'];
        this.i = 0;
        this.isDataLoaded = false;
        this.mentorService.getMentors()
            .subscribe(function (mentors) {
            _this.mentors = mentors;
            _this.users = [];
            for (_this.i = 0; _this.i < _this.mentors.length; _this.i++) {
                _this.users.push({
                    id: _this.i + 1,
                    _id: _this.mentors[_this.i]._id,
                    name: _this.mentors[_this.i].name,
                    email: _this.mentors[_this.i].email,
                    phone: _this.mentors[_this.i].phone,
                    gender: _this.mentors[_this.i].gender,
                    status: _this.mentors[_this.i].status,
                    edit: '',
                    delete: ''
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    MentorListComponent.prototype.deleteMentor = function (id) {
        var _this = this;
        this.mentorService.deleteMentor(id).then(function (result) {
            _this.router.navigate(['/mentor-list']);
        }, function (err) {
            console.log(err);
        });
    };
    MentorListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MentorListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MentorListComponent.prototype, "sort", void 0);
    MentorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-mentor-list',
            template: __webpack_require__(/*! ./mentor-list.component.html */ "./src/app/components/mentor/mentor-list/mentor-list.component.html"),
            styles: [__webpack_require__(/*! ./mentor-list.component.css */ "./src/app/components/mentor/mentor-list/mentor-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mentor_service__WEBPACK_IMPORTED_MODULE_0__["MentorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MentorListComponent);
    return MentorListComponent;
}());



/***/ }),

/***/ "./src/app/components/mentor/register/mentor-register/mentor-register.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/mentor/register/mentor-register/mentor-register.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.example-container > * {\n    width: 100%;\n}\n\n.example-form {\n    min-width: 100%;\n    max-width: 100%;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n    padding-right: 16px;\n}"

/***/ }),

/***/ "./src/app/components/mentor/register/mentor-register/mentor-register.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mentor/register/mentor-register/mentor-register.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\n\n<h1 class=\"mat-h1\">Mentor Registration Form</h1>\n\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill out your information</ng-template>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"name\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"email\" placeholder=\"Email Address\" formControlName=\"email\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"phone\" placeholder=\"Enter phone number\" formControlName=\"phone\" required>\n            </mat-form-field>\n            <mat-radio-group (change)=\"onChange($event)\" formControlName=\"gender\" required>\n                <label style=\"color: gray;\">Gender : </label>\n                <mat-radio-button id=\"male\" name=\"male\" value=\"male\" style=\"color: gray;\"> Male &nbsp;\n                </mat-radio-button>\n                <mat-radio-button id=\"female\" name=\"female\" value=\"female\" style=\"color: gray;\"> Female\n                </mat-radio-button>\n            </mat-radio-group>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Enter languages\" formControlName=\"language\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Location (Please include how far you are willing to travel and whether you have access\n        to a mode of transport (car, bike, public transport)).\" formControlName=\"location\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Which subjects did you study in VCE? What were your study scores for these subjects?\n        (skip if the question is not relevant to you)\" formControlName=\"vce_subjects\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Are you currently studying? If so, what are you studying? If not, what are your plans\n        for 2018?\" formControlName=\"studying\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\"\n                       placeholder=\"Do you have any tutoring or mentoring experience? Please elaborate.\"\n                       formControlName=\"experience\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\"\n                       placeholder=\"Do you have any other experience in volunteering or community work?\"\n                       formControlName=\"volunteering\" required>\n            </mat-form-field>\n            <label style=\"color: gray;\">Do you have a working with children check? </label>\n            <mat-radio-group (change)=\"onChange($event)\" formControlName=\"wwcc\" required>\n                <mat-radio-button name=\"wwcc\" value=\"Yes\" style=\"color: gray;\"> Yes &nbsp;</mat-radio-button>\n                <mat-radio-button name=\"wwcc\" value=\"No\" style=\"color: gray;\"> No</mat-radio-button>\n                <mat-radio-button name=\"wwcc\" value=\"In process of obtaining one\" style=\"color: gray;\"> In the process\n                    of ontaining one.\n                </mat-radio-button>\n            </mat-radio-group>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Why do you want to join this program? (100-200 words)\"\n                       formControlName=\"why_join\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Where did you hear about us?\" formControlName=\"about_us\"\n                       required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"What does the term 'refugee' mean to you? (100-200 words)\"\n                       formControlName=\"refugee_definition\" required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Do you have any special preferences with regards to students? (e.g. 'not willing to\n        mentor VCE level students')\" formControlName=\"preference\" required>\n            </mat-form-field>\n            <mat-checkbox name=\"send_me_copy\" style=\"color: gray;\" formControlName=\"send_me_copy\">Send Me A Copy Of My\n                Responses.\n            </mat-checkbox>\n            <br/>\n            <br/>\n            <div>\n                <button color=\"primary\" mat-raised-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\" enctype=\"multipart/form-data\">\n            <ng-template matStepLabel>WWCC</ng-template>\n            <mat-form-field style=\"display: none;\" >\n                <input matInput placeholder=\"Last name, First name\" required formControlName=\"x\">\n            </mat-form-field>\n            <div class=\"form-group\">\n                <div>\n                    <div id=\"fileSelector\">\n                        <input type=\"file\" class=\"form-control\" required formControlName=\"wwcc_back\"  id=\"wwcc_front\"\n                               ng2FileSelect [uploader]=\"uploader\" >\n                    </div>\n                    <br/>\n                    <div>\n                        <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                            <div class=\"col-sm-4\">{{item.file.name}}</div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-success\"\n                                         [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\" style=\"margin-top: -8px;\">\n                                <button mat-button color=\"primary\" (click)=\"item.upload()\">Upload</button>\n                                <button mat-button color=\"warn\" (click)=\"item.remove()\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row col-sm-10 \" *ngIf=\"uploader?.queue?.length > 0\">\n                        <button mat-stroked-button color=\"primary\" (click)=\"uploader.uploadAll()\" style=\"float: right\">\n                            Upload All\n                        </button>\n                    </div>\n                    <div class=\"col-md-2\"></div>\n                </div>\n\n            </div>\n            <br>\n            <mat-label class=\"row\">It's really important that our students stay safe whilst being a part of this\n                program. Thus, we require that all our tutors have a valid Working with Children Check.If you do not\n                have a valid WWCC, could you please visit <a target=\"_blank\"\n                                                             href=\"http://www.workingwithchildren.vic.gov.au/\">this\n                    website </a> and apply for a Volunteer WWCC?\n            </mat-label>\n            <br>\n            <br>\n            <div>\n                <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>&nbsp;\n                <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step thirdFormGroup>\n        <ng-template matStepLabel>Videos</ng-template>\n        You are now done.\n        <div>\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>&nbsp;\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n        </div>\n    </mat-step>\n    <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>&nbsp;\n            <button mat-raised-button color=\"primary\" (click)=\"onRegisterSubmit()\" matStepperNext>Next</button>\n        </div>\n    </mat-step>\n\n\n</mat-horizontal-stepper>"

/***/ }),

/***/ "./src/app/components/mentor/register/mentor-register/mentor-register.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mentor/register/mentor-register/mentor-register.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MentorRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorRegisterComponent", function() { return MentorRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/mentor.service */ "./src/app/services/mentor.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var uri = 'http://localhost:3000/mentor_subjects/upload';
var MentorRegisterComponent = /** @class */ (function () {
    function MentorRegisterComponent(_formBuilder, mentorService, router, snackBar, validateService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.mentorService = mentorService;
        this.router = router;
        this.snackBar = snackBar;
        this.validateService = validateService;
        this.isLinear = true;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            if (_this.attachmentList.length === 2) {
                _this.secondFormGroup.controls.x.setValue('Hello');
            }
        };
    }
    MentorRegisterComponent.prototype.onChange = function (mrChange) {
        if (mrChange.source.name === 'wwcc') {
            this.wwcc = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.gender = mrChange.source.value;
        }
    };
    MentorRegisterComponent.prototype.ngOnInit = function () {
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.firstFormGroup = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required && _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required && _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            vce_subjects: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            studying: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            volunteering: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            wwcc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            about_us: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            why_join: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            refugee_definition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            preference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            send_me_copy: [''],
        });
        this.secondFormGroup = this._formBuilder.group({
            wwcc_back: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            x: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.thirdFormGroup = this._formBuilder.group({});
    };
    MentorRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var mentor = {
            name: this.firstFormGroup.controls.name.value,
            password: this.firstFormGroup.controls.password.value,
            email: this.firstFormGroup.controls.email.value,
            phone: this.firstFormGroup.controls.phone.value,
            language: this.firstFormGroup.controls.language.value,
            vce_subjects: this.firstFormGroup.controls.vce_subjects.value,
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
            wwcc_front: this.attachmentList[0].uploadname,
            wwcc_back: this.attachmentList[1].uploadname
        };
        this.mentorService.registerMentor(mentor).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('New mentor added', null, { duration: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.snackBar.open('Something went wrong!', null, { duration: 3000 });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MentorRegisterComponent.prototype, "change", void 0);
    MentorRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mentor-register',
            template: __webpack_require__(/*! ./mentor-register.component.html */ "./src/app/components/mentor/register/mentor-register/mentor-register.component.html"),
            styles: [__webpack_require__(/*! ./mentor-register.component.css */ "./src/app/components/mentor/register/mentor-register/mentor-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"]])
    ], MentorRegisterComponent);
    return MentorRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h1\">New Mentoring Meeting</h2>\n\n<form (submit)=\"onSubmit()\" class=\"example-form\">\n\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"date\" name = \"date\" placeholder=\"Choose a date\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Subject\" disabled value=\"{{subject}}\" name=\"subject\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Student\" disabled value=\"{{student}}\" name=\"student\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Session\" disabled value=\"{{session}}\" name=\"session\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"number\" placeholder=\"Section\" [(ngModel)]=\"section\"  name=\"section\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Duration in minutes (90)\" [(ngModel)]=\"duration\"  name=\"duration\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Comment\" [(ngModel)]=\"comment\" name=\"comment\">\n  </mat-form-field>\n\n\n  <br/>\n  <br/>\n  <br/>\n\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CreateMentoringMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMentoringMeetingComponent", function() { return CreateMentoringMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
/* harmony import */ var _services_mentoring_meeting_mentoring_meeting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/mentoring-meeting/mentoring-meeting.service */ "./src/app/services/mentoring-meeting/mentoring-meeting.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateMentoringMeetingComponent = /** @class */ (function () {
    function CreateMentoringMeetingComponent(activatedRoute, snackBar, router, mentoringMeetingService, studentSubjectService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.router = router;
        this.mentoringMeetingService = mentoringMeetingService;
        this.studentSubjectService = studentSubjectService;
        this.session = 0;
        this.studentSubjectService.getStudentSubjectsById(this.activatedRoute.snapshot.params['id']).subscribe(function (data) {
            _this.studentSubject = data;
            _this.subject = _this.studentSubject[0].subject[0].name;
            _this.sectinos = _this.studentSubject[0].subject[0].section;
            _this.student = _this.studentSubject[0].student[0].name;
        });
        this.mentoringMeetingService.countMentoringMeetingById(this.activatedRoute.snapshot.params['id']).subscribe(function (data) {
            _this.session = Number(data) + 1;
            console.log(_this.session);
        });
    }
    CreateMentoringMeetingComponent.prototype.onSubmit = function () {
        var _this = this;
        var mentoring_meeting = {
            student_subject: this.studentSubject[0]._id,
            date: this.date,
            section: this.section,
            session: this.session,
            duration: this.duration,
            comment: this.comment
        };
        this.mentoringMeetingService.registerMentoringMeeting(mentoring_meeting).subscribe(function (data) {
            // console.log(mentoring_meeting);
            if (data['success']) {
                _this.snackBar.open('Mentoring meeting recorded', null, { duration: 1500 });
                _this.router.navigate(['/mentor-dashboard']);
            }
            else {
                _this.snackBar.open('Something went wrong', 'Dismiss', { duration: 2000 });
            }
        });
    };
    CreateMentoringMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-mentoring-meeting',
            template: __webpack_require__(/*! ./create-mentoring-meeting.component.html */ "./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.html"),
            styles: [__webpack_require__(/*! ./create-mentoring-meeting.component.css */ "./src/app/components/mentoring-meeting/create-mentoring-meeting/create-mentoring-meeting.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_mentoring_meeting_mentoring_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MentoringMeetingService"],
            _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_2__["StudentSubjectService"]])
    ], CreateMentoringMeetingComponent);
    return CreateMentoringMeetingComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Page Not Found!</h1>\n<h3 class=\"mat-h3\">\n  Either you are not logged in or you are trying to navigate to a route you are not privileged to.<br/>\n  Please navigate using the menu provided.\n</h3>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{user.name}}'s Profile</h1>\n<div *ngIf=\"user\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //   // this.authService.getProfile().subscribe(profile => {
        //     // this.user = profile['user'];
        //   },
        //    err => {
        //      console.log(err);
        //      return false;
        //    });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/local/local-edit/local-edit.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/resources/local/local-edit/local-edit.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/local/local-edit/local-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/resources/local/local-edit/local-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  local-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/resources/local/local-edit/local-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/resources/local/local-edit/local-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LocalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalEditComponent", function() { return LocalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalEditComponent = /** @class */ (function () {
    function LocalEditComponent() {
    }
    LocalEditComponent.prototype.ngOnInit = function () {
    };
    LocalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-edit',
            template: __webpack_require__(/*! ./local-edit.component.html */ "./src/app/components/resources/local/local-edit/local-edit.component.html"),
            styles: [__webpack_require__(/*! ./local-edit.component.css */ "./src/app/components/resources/local/local-edit/local-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocalEditComponent);
    return LocalEditComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/local/local-list/local-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/resources/local/local-list/local-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/local/local-list/local-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/resources/local/local-list/local-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1 class=\"mat-h1\">New Local Resources</h1>\n<div class=\"button-row\">\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['/local-register']\" style=\"float:right;\">New Resource</button>\n</div>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.title}}</td>\n    </ng-container>\n\n\n    <!-- Email Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.description}}</td>\n    </ng-container>\n\n\n    <!-- Subject Column -->\n    <ng-container matColumnDef=\"subject\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Subject</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.subject}}</td>\n    </ng-container>\n\n    <!-- Edit Column -->\n    <ng-container matColumnDef=\"download\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Download</th>\n      <td mat-cell *matCellDef=\"let row\"> <a [routerLink]=\"\" (click)=\"download(row.id-1)\">\n        <mat-icon style=\"color: darkgreen\">save_alt</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <!-- Delete Column -->\n    <ng-container matColumnDef=\"delete\" *ngIf=\"isAdmin\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>\n      <td mat-cell *matCellDef=\"let row\"><a  [routerLink]=\"\" (click)=\"deleteRes(row._id, row.id)\" >\n        <mat-icon style=\"color: red\">delete</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"isAdmin?displayedColumnsAdmin:displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: isAdmin?displayedColumnsAdmin:displayedColumns;\">\n    </tr>\n  </table>\n\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/resources/local/local-list/local-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/resources/local/local-list/local-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LocalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalListComponent", function() { return LocalListComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_res_local_res_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/local_res/local-res.service */ "./src/app/services/local_res/local-res.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocalListComponent = /** @class */ (function () {
    function LocalListComponent(authService, localResService, router, snackBar) {
        var _this = this;
        this.authService = authService;
        this.localResService = localResService;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumnsAdmin = ['id', 'title', 'description', 'subject', 'download', 'delete'];
        this.displayedColumns = ['id', 'title', 'description', 'subject', 'download'];
        this.isDataLoaded = false;
        this.isAdmin = false;
        this.localResService.getLocalRess()
            .subscribe(function (resources) {
            _this.resources = [];
            for (var index in resources) {
                _this.resources.push({
                    id: Number(index) + 1,
                    _id: resources[index]._id,
                    subject: resources[index].subject,
                    title: resources[index].title,
                    description: resources[index].description,
                    fileUplaod: resources[index].fileUplaod
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.resources);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.isAdmin = this.authService.getUserType() === 'admin';
    }
    LocalListComponent.prototype.deleteFile = function (index) {
        // deleteRes(id);
        var fileUplaod = this.resources[index].fileUplaod;
        this.localResService.deleteFile(fileUplaod)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(data, fileUplaod); }, function (error) { return console.error(error); });
    };
    LocalListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LocalListComponent.prototype.deleteRes = function (id, i) {
        var _this = this;
        this.deleteFile(i - 1);
        this.localResService.deleteLocalRes(id).then(function (result) {
            _this.router.navigate(['/local-list']);
            _this.resources.splice(i - 1, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.resources);
        }, function (err) {
            console.log(err);
        });
    };
    LocalListComponent.prototype.download = function (index) {
        var _this = this;
        var fileUplaod = this.resources[index].fileUplaod;
        this.localResService.downloadFile(fileUplaod)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(data, fileUplaod); }, function (error) { return _this.snackBar.open('File Not Found', 'Dismiss', { duration: 2500 }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], LocalListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], LocalListComponent.prototype, "sort", void 0);
    LocalListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-local-list',
            template: __webpack_require__(/*! ./local-list.component.html */ "./src/app/components/resources/local/local-list/local-list.component.html"),
            styles: [__webpack_require__(/*! ./local-list.component.css */ "./src/app/components/resources/local/local-list/local-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_local_res_local_res_service__WEBPACK_IMPORTED_MODULE_1__["LocalResService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LocalListComponent);
    return LocalListComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/local/local-register/local-register.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/resources/local/local-register/local-register.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\n    height: 80px;\n    line-height: 80px;\n    color: beige;\n    background-color: rgb(46, 43, 43);\n    font-size: 24px;\n    padding-left: 20px;\n}\n\n.card{\n    background-color: white;\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n    color:black;\n    margin: 20px;\n    padding: 10px;\n}\n\n.uploadList{\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/components/resources/local/local-register/local-register.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/resources/local/local-register/local-register.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2 class=\"mat-h1\">Local Resources</h2>\n\n<form (submit)=\"onRegisterSubmit(formList)\" #formList=\"ngForm\" class=\"example-form\" enctype=\"multipart/form-data\">\n\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"title\" name=\"title\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <mat-select [(ngModel)]=\"subject\" name=\"subject\" placeholder=\"Subject\">\n            <mat-option *ngFor=\"let subject of subjects\" [value]=\"subject.name\">{{subject.name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <div class=\"form-group\">\n        <mat-label>File</mat-label>\n        <div>\n            <div id=\"fileSelector\">\n                <input type=\"file\" class=\"form-control\" name=\"fileUplaod\" id=\"fileUpload\"\n                       ng2FileSelect  [uploader]=\"uploader\">\n            </div>\n\n        </div>\n    </div>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        <button mat-raised-button color=\"warn\" style=\"margin: 10px;\" [routerLink]=\"['/local-list']\">Cancel</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n\n</form>"

/***/ }),

/***/ "./src/app/components/resources/local/local-register/local-register.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/resources/local/local-register/local-register.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LocalRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalRegisterComponent", function() { return LocalRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _services_local_res_local_res_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/local_res/local-res.service */ "./src/app/services/local_res/local-res.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var uri = 'http://localhost:3000/local-res/upload';
var LocalRegisterComponent = /** @class */ (function () {
    function LocalRegisterComponent(snackBar, router, localResService, subjectService) {
        var _this = this;
        this.snackBar = snackBar;
        this.router = router;
        this.localResService = localResService;
        this.subjectService = subjectService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        subjectService.getSubjects().subscribe(function (subjects) {
            _this.subjects = subjects;
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    LocalRegisterComponent.prototype.ngOnInit = function () {
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
    };
    LocalRegisterComponent.prototype.onRegisterSubmit = function (formList) {
        var _this = this;
        var myUploader = this.uploader.queue[this.uploader.queue.length - 1];
        var fileName = Date.now() + '.' + myUploader.file.name;
        myUploader.file.name = fileName;
        myUploader.upload();
        var localRes = {
            title: this.title,
            description: this.description,
            subject: this.subject,
            fileUplaod: fileName
        };
        this.localResService.registerLocalRes(localRes).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('New resource added', 'dismiss', { duration: 3000 });
                formList.form.reset();
            }
            else {
                _this.snackBar.open('Something went wrong!', 'dismiss', { duration: 3000 });
            }
        });
        this.router.navigate(['/local-list']);
    };
    LocalRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-register',
            template: __webpack_require__(/*! ./local-register.component.html */ "./src/app/components/resources/local/local-register/local-register.component.html"),
            styles: [__webpack_require__(/*! ./local-register.component.css */ "./src/app/components/resources/local/local-register/local-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_local_res_local_res_service__WEBPACK_IMPORTED_MODULE_2__["LocalResService"],
            _services_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"]])
    ], LocalRegisterComponent);
    return LocalRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/online/online-edit/online-edit.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/resources/online/online-edit/online-edit.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/online/online-edit/online-edit.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/resources/online/online-edit/online-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"mat-h1\">New Online Resources</h2>\n\n<form (submit)=\"updateOnlineRes(onlineRes._id)\" #formList=\"ngForm\" class=\"example-form\" enctype=\"multipart/form-data\">\n\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"onlineRes.title\" name=\"title\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"onlineRes.description\" name=\"description\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select [(ngModel)]=\"onlineRes.subject\" name=\"subject\" placeholder=\"Subject\">\n      <mat-option *ngFor=\"let subject of subjects\" [value]=\"subject.name\">{{subject.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Link\" [(ngModel)]=\"onlineRes.link\" name=\"link\">\n  </mat-form-field>\n  <br/>\n  <br/>\n\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button mat-raised-button color=\"warn\" style=\"margin: 10px;\" [routerLink]=\"['/local-list']\">Cancel</button>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n\n</form>"

/***/ }),

/***/ "./src/app/components/resources/online/online-edit/online-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/resources/online/online-edit/online-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OnlineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineEditComponent", function() { return OnlineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_online_res_online_res_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/online_res/online-res.service */ "./src/app/services/online_res/online-res.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnlineEditComponent = /** @class */ (function () {
    function OnlineEditComponent(subjectService, onlineResService, route, snackBar, activatedRoute) {
        var _this = this;
        this.subjectService = subjectService;
        this.onlineResService = onlineResService;
        this.route = route;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.onlineRes = {};
        subjectService.getSubjects().subscribe(function (subjects) {
            _this.subjects = subjects;
        });
    }
    OnlineEditComponent.prototype.ngOnInit = function () {
        this.getOnlineRes(this.activatedRoute.snapshot.params['id']);
    };
    OnlineEditComponent.prototype.getOnlineRes = function (id) {
        var _this = this;
        this.onlineResService.getOnlineRes(id).then(function (res) {
            _this.onlineRes = res;
        }, function (err) {
            console.log(err);
        });
    };
    OnlineEditComponent.prototype.updateOnlineRes = function (id) {
        var _this = this;
        this.onlineResService.editOnlineRes(id, this.onlineRes).then(function (result) {
            _this.route.navigate(['/online-list']);
            _this.snackBar.open('Resource updated!', null, { duration: 3000 });
        }, function (err) {
            console.log(err);
        });
    };
    OnlineEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-edit',
            template: __webpack_require__(/*! ./online-edit.component.html */ "./src/app/components/resources/online/online-edit/online-edit.component.html"),
            styles: [__webpack_require__(/*! ./online-edit.component.css */ "./src/app/components/resources/online/online-edit/online-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            _services_online_res_online_res_service__WEBPACK_IMPORTED_MODULE_1__["OnlineResService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OnlineEditComponent);
    return OnlineEditComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/online/online-list/online-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/resources/online/online-list/online-list.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/online/online-list/online-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/resources/online/online-list/online-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"mat-h1\">Online Resources</h1>\n<div class=\"button-row\" *ngIf=\"isAdmin\">\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['/online-register']\" style=\"float:right;\">New Resource</button>\n</div>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.title}}</td>\n    </ng-container>\n\n\n    <!-- Email Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.description}}</td>\n    </ng-container>\n\n\n    <!-- Subject Column -->\n    <ng-container matColumnDef=\"subject\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Subject</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.subject}}</td>\n    </ng-container>\n\n    <!-- Link Column -->\n    <ng-container matColumnDef=\"download\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Link</th>\n      <td mat-cell *matCellDef=\"let row\"> <a href=\"{{row.link}}\" target=\"_blank\">\n        {{row.link}}\n      </a>\n\n      </td>\n    </ng-container>\n\n    <!-- Edit Column -->\n    <ng-container matColumnDef=\"edit\" *ngIf=\"isAdmin\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Edit</th>\n      <td mat-cell *matCellDef=\"let row\"><a  [routerLink]=\"['/online-edit', row._id]\" >\n        <mat-icon style=\"color: darkgreen\">edit</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <!-- Delete Column -->\n    <ng-container matColumnDef=\"delete\" *ngIf=\"isAdmin\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>\n      <td mat-cell *matCellDef=\"let row\"><a  (click)=\"deleteRes(row._id, row.id)\" >\n        <mat-icon style=\"color: red\">delete</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"isAdmin?displayedColumnsAdmin:displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: isAdmin?displayedColumnsAdmin:displayedColumns;\">\n    </tr>\n  </table>\n\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/resources/online/online-list/online-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/resources/online/online-list/online-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OnlineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineListComponent", function() { return OnlineListComponent; });
/* harmony import */ var _services_online_res_online_res_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/online_res/online-res.service */ "./src/app/services/online_res/online-res.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnlineListComponent = /** @class */ (function () {
    function OnlineListComponent(onlineService, router, authService) {
        var _this = this;
        this.onlineService = onlineService;
        this.router = router;
        this.authService = authService;
        this.displayedColumnsAdmin = ['id', 'title', 'description', 'subject', 'download', 'edit', 'delete'];
        this.displayedColumns = ['id', 'title', 'description', 'subject', 'download'];
        this.isDataLoaded = false;
        this.isAdmin = false;
        this.onlineService.getOnlineRess()
            .subscribe(function (resources) {
            _this.resources = [];
            for (var index in resources) {
                _this.resources.push({
                    id: Number(index) + 1,
                    _id: resources[index]._id,
                    subject: resources[index].subject,
                    title: resources[index].title,
                    description: resources[index].description,
                    link: resources[index].link
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.resources);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.isAdmin = this.authService.getUserType() === 'admin';
    }
    OnlineListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OnlineListComponent.prototype.deleteRes = function (id, index) {
        this.resources.splice(index - 1, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.resources);
        this.onlineService.deleteOnlineRes(id).then(function (result) {
            // this.router.navigate(['/online-list']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OnlineListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OnlineListComponent.prototype, "sort", void 0);
    OnlineListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-online-list',
            template: __webpack_require__(/*! ./online-list.component.html */ "./src/app/components/resources/online/online-list/online-list.component.html"),
            styles: [__webpack_require__(/*! ./online-list.component.css */ "./src/app/components/resources/online/online-list/online-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_online_res_online_res_service__WEBPACK_IMPORTED_MODULE_0__["OnlineResService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], OnlineListComponent);
    return OnlineListComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/online/online-register/online-register.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/resources/online/online-register/online-register.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/online/online-register/online-register.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/resources/online/online-register/online-register.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"mat-h1\">New Online Resources</h2>\n\n<form (submit)=\"onRegisterSubmit(formList)\" #formList=\"ngForm\" class=\"example-form\" enctype=\"multipart/form-data\">\n\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"title\" name=\"title\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select [(ngModel)]=\"subject\" name=\"subject\" placeholder=\"Subject\">\n      <mat-option *ngFor=\"let subject of subjects\" [value]=\"subject.name\">{{subject.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Link\" [(ngModel)]=\"link\" name=\"link\">\n  </mat-form-field>\n  <br/>\n  <br/>\n\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button mat-raised-button color=\"warn\" style=\"margin: 10px;\" [routerLink]=\"['/local-list']\">Cancel</button>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n\n</form>"

/***/ }),

/***/ "./src/app/components/resources/online/online-register/online-register.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/resources/online/online-register/online-register.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OnlineRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineRegisterComponent", function() { return OnlineRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_online_res_online_res_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/online_res/online-res.service */ "./src/app/services/online_res/online-res.service.ts");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnlineRegisterComponent = /** @class */ (function () {
    function OnlineRegisterComponent(router, snackBar, onlineResService, subjectService) {
        var _this = this;
        this.router = router;
        this.snackBar = snackBar;
        this.onlineResService = onlineResService;
        this.subjectService = subjectService;
        subjectService.getSubjects().subscribe(function (subjects) {
            _this.subjects = subjects;
        });
    }
    OnlineRegisterComponent.prototype.ngOnInit = function () {
    };
    OnlineRegisterComponent.prototype.onRegisterSubmit = function (formList) {
        var _this = this;
        var onlineRes = {
            title: this.title,
            description: this.description,
            subject: this.subject,
            link: this.link
        };
        this.onlineResService.registerOnlineRes(onlineRes).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('New resource added', null, { duration: 1500 });
                _this.router.navigate(['/online-list']);
            }
            else {
                _this.snackBar.open('Something went wrong!', 'Dismiss', { duration: 2000 });
            }
        });
    };
    OnlineRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-register',
            template: __webpack_require__(/*! ./online-register.component.html */ "./src/app/components/resources/online/online-register/online-register.component.html"),
            styles: [__webpack_require__(/*! ./online-register.component.css */ "./src/app/components/resources/online/online-register/online-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _services_online_res_online_res_service__WEBPACK_IMPORTED_MODULE_2__["OnlineResService"],
            _services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]])
    ], OnlineRegisterComponent);
    return OnlineRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/star-rating/star-rating.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/star-rating/star-rating.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/star-rating/star-rating.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/star-rating/star-rating.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\" (click)=\"onClick(i+1)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\n  <mat-icon style=\"font-size: 28px; \">\n    {{showIcon(i)}}\n  </mat-icon>\n</button>\n<mat-error *ngIf=\"starCount == null || starCount == 0\">\n  Star count is <strong>required</strong> and cannot be zero\n</mat-error>"

/***/ }),

/***/ "./src/app/components/star-rating/star-rating.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/star-rating/star-rating.component.ts ***!
  \*****************************************************************/
/*! exports provided: StarRatingComponent, StarRatingColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingColor", function() { return StarRatingColor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(snackBar) {
        this.snackBar = snackBar;
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snackBarDuration = 2000;
        this.ratingArr = [];
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        for (var index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    };
    StarRatingComponent.prototype.onClick = function (rating) {
        console.log(rating);
        // this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
        //     duration: this.snackBarDuration
        // });
        this.ratingUpdated.emit(rating);
        return false;
    };
    StarRatingComponent.prototype.showIcon = function (index) {
        if (this.rating >= index + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rating'),
        __metadata("design:type", Number)
    ], StarRatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('starCount'),
        __metadata("design:type", Number)
    ], StarRatingComponent.prototype, "starCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('color'),
        __metadata("design:type", String)
    ], StarRatingComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StarRatingComponent.prototype, "ratingUpdated", void 0);
    StarRatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__(/*! ./star-rating.component.html */ "./src/app/components/star-rating/star-rating.component.html"),
            styles: [__webpack_require__(/*! ./star-rating.component.css */ "./src/app/components/star-rating/star-rating.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], StarRatingComponent);
    return StarRatingComponent;
}());

var StarRatingColor;
(function (StarRatingColor) {
    StarRatingColor["primary"] = "primary";
    StarRatingColor["accent"] = "accent";
    StarRatingColor["warn"] = "warn";
})(StarRatingColor || (StarRatingColor = {}));


/***/ }),

/***/ "./src/app/components/student/register/student-register/student-register.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/student/register/student-register/student-register.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student/register/student-register/student-register.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/student/register/student-register/student-register.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\n\n<div>\n  <h2 class=\"page-header\">Student Registration Form</h2>\n  <form class=\"example-form\" (submit)=\"onRegisterSubmit()\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\" >\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"email\" name=\"email\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"password\"  placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" autocomplete=\"true\" >\n    </mat-form-field>\n\n\n    <mat-radio-group (change)=\"onChange($event)\" name=\"gender\">\n      <label style=\"color: gray;\">Gender : </label>\n      <mat-radio-button id=\"male\" name=\"male\" value=\"male\" style=\"color: gray;\"> Male &nbsp;</mat-radio-button>\n      <mat-radio-button id=\"female\" name=\"female\" value=\"female\" style=\"color: gray;\"> Female </mat-radio-button>\n    </mat-radio-group>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"phone\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Enter phone number\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"phone\" [(ngModel)]=\"parents_phone\" name=\"parents_phone\" placeholder=\"Parent/Guardian's phone number\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"country\" name=\"country\" placeholder=\"Country of origin\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"mentoring_address\" name=\"mentoring_address\" placeholder=\"Mentoring Location\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"language\" name=\"language\" placeholder=\"language spoken\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"school_level\" name=\"school_level\" placeholder=\"Current year level at school\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"school_name\" name=\"school_name\"  placeholder=\"Type your school name\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"family_situation\" name=\"family_situation\"  placeholder=\"Current family situation\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"english_level\" name=\"english_level\"  placeholder=\"Level of english competency.\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"volunteering\" name=\"volunteering\" placeholder=\"Do you have any other experience in volunteering or community work?\">\n    </mat-form-field>\n\n    <label style=\"color: gray;\">Preferred gender of tutor </label>\n\n    <mat-radio-group (change)=\"onChange($event)\" name='tutor_gender'>\n      <mat-radio-button  name=\"tutor_gender\" value=\"male\" style=\"color: gray;\"> Male &nbsp;</mat-radio-button>\n      <mat-radio-button  name=\"tutor_gender\" value=\"female\" style=\"color: gray;\"> Female </mat-radio-button>\n      <mat-radio-button  name=\"tutor_gender\" value=\"No Preference\" style=\"color: gray;\">No Preference</mat-radio-button>\n    </mat-radio-group>\n\n\n\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" >Save</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/student/register/student-register/student-register.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/student/register/student-register/student-register.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StudentRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegisterComponent", function() { return StudentRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentRegisterComponent = /** @class */ (function () {
    function StudentRegisterComponent(validateService, studentService, router, snackBar) {
        this.validateService = validateService;
        this.studentService = studentService;
        this.router = router;
        this.snackBar = snackBar;
    }
    StudentRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var student = {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
            parents_phone: this.parents_phone,
            country: this.country,
            language: this.language,
            school_level: this.school_level,
            school_name: this.school_name,
            family_situation: this.family_situation,
            english_level: this.english_level,
            tutor_gender: this.tutor_gender,
            gender: this.gender,
            address: this.address,
            mentoring_address: this.mentoring_address,
            volunteering: this.volunteering
        };
        // Required Fields
        if (!this.validateService.validateRegister(student)) {
            this.snackBar.open('Please fill in all fields', null, { duration: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(student.email)) {
            this.snackBar.open('Please use a valid email', null, { duration: 3000 });
            return false;
        }
        // Register user
        this.studentService.registerStudent(student).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('You are now registered and can now login', null, { duration: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.snackBar.open('Something went wrong', null, { duration: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    StudentRegisterComponent.prototype.onChange = function (mrChange) {
        if (mrChange.source.name === 'tutor_gender') {
            this.tutor_gender = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.gender = mrChange.source.value;
        }
    };
    StudentRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-register',
            template: __webpack_require__(/*! ./student-register.component.html */ "./src/app/components/student/register/student-register/student-register.component.html"),
            styles: [__webpack_require__(/*! ./student-register.component.css */ "./src/app/components/student/register/student-register/student-register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], StudentRegisterComponent);
    return StudentRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/student/student-edit/student-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/student/student-edit/student-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student/student-edit/student-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/student/student-edit/student-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\n  <!--<h2 class=\"page-header\">Student Registration Form</h2>-->\n  <!--<form (submit)=\"updateStudent(student._id)\" >-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"name\">Name</label>-->\n      <!--<input type=\"text\" [(ngModel)]=\"student.name\" name=\"name\" class=\"form-control\" placeholder=\"Type your name\" id=\"name\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"email\">EmailAddress</label>-->\n      <!--<input type=\"email\" [(ngModel)]=\"student.email\" name=\"email\"  class=\"form-control\" placeholder=\"Type your email\" id=\"email\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Password</label>-->\n      <!--<input type=\"password\" [(ngModel)]=\"student.password\" name=\"password\"  class=\"form-control\" placeholder=\"Passwotrd\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Gender</label>-->\n      <!--<div class=\"form-check\">-->\n        <!--<div class=\"radio\">-->\n          <!--<label for=\"radio4\" class=\"form-check-label text-capitalize\">-->\n            <!--<input type=\"radio\" [(ngModel)]=\"student.gender\" name=\"gender\"  id=\"radio4\" value=\"Male\" class=\"form-check-input\">Male-->\n          <!--</label>-->\n        <!--</div>-->\n        <!--<div class=\"radio\">-->\n          <!--<label for=\"radio5\" class=\"form-check-label text-capitalize\">-->\n            <!--<input type=\"radio\" [(ngModel)]=\"student.gender\" name=\"gender\"  id=\"radio5\" value=\"Female\" class=\"form-check-input\">Female-->\n          <!--</label >-->\n        <!--</div>-->\n\n      <!--</div>-->\n\n    <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Phone number</label>-->\n      <!--<input type=\"text\" [(ngModel)]=\"student.phone\" name=\"phone\"  class=\"form-control\" placeholder=\"Type your phone number\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Parent/Guardian's phone number</label>-->\n      <!--<input type=\"text\" [(ngModel)]=\"student.parents_phone\" name=\"parents_phone\" class=\"form-control\" placeholder=\"Type the phone number\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Country of origin</label>-->\n      <!--<input type=\"text\" [(ngModel)]=\"student.country\" name=\"country\"  class=\"form-control\" placeholder=\"Ccountry name\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Languages spoken</label>-->\n      <!--<input type=\"text\"  [(ngModel)]=\"student.language\" name=\"language\" class=\"form-control\" placeholder=\"i.e. English, Spanish,...\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Current year level at school</label>-->\n      <!--<input type=\"text\"  [(ngModel)]=\"student.school_level\" name=\"school_level\" class=\"form-control\" placeholder=\"Year level\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">School name</label>-->\n      <!--<input type=\"text\"  [(ngModel)]=\"student.school_name\" name=\"school_name\" class=\"form-control\" placeholder=\"Type your school name\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Current family situation</label>-->\n      <!--<input type=\"text\"   [(ngModel)]=\"student.family_situation\" name=\"family_situation\" class=\"form-control\" placeholder=\"i.e. Living with parents,unaccompanied minor etc\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Level of english competency</label>-->\n      <!--<input type=\"text\"  [(ngModel)]=\"student.english_level\" name=\"english_level\" class=\"form-control\" placeholder=\"Level\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"text-capitalize\">Preferred gender of tutor</label>-->\n      <!--<div class=\"form-check\">-->\n        <!--<div class=\"radio\">-->\n          <!--<label for=\"radio1\" class=\"form-check-label text-capitalize\">-->\n            <!--<input type=\"radio\"  [(ngModel)]=\"student.tutor_gender\" name=\"tutor_gender\" id=\"radio1\" value=\"Male\" class=\"form-check-input\">Male-->\n          <!--</label>-->\n        <!--</div>-->\n        <!--<div class=\"radio\">-->\n          <!--<label for=\"radio2\" class=\"form-check-label text-capitalize\">-->\n            <!--<input type=\"radio\" [(ngModel)]=\"student.tutor_gender\" name=\"tutor_gender\" id=\"radio2\" value=\"Female\" class=\"form-check-input\">Female-->\n          <!--</label >-->\n        <!--</div>-->\n        <!--<div class=\"radio\">-->\n          <!--<label for=\"radio3\" class=\"form-check-label text-capitalize \">-->\n            <!--<input type=\"radio\" [(ngModel)]=\"student.tutor_gender\" name=\"tutor_gender\" id=\"radio3\" name=\"radios\" value=\"No Preference\" class=\"form-check-input\">No Preference-->\n          <!--</label>-->\n        <!--</div>-->\n      <!--</div>-->\n\n    <!--</div>-->\n\n    <!--<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">-->\n\n  <!--</form>-->\n<!--</div>-->\n\n\n<!--<div>-->\n<!--<h2 class=\"page-header\">Student Registration Form</h2>-->\n<!--<form (submit)=\"onRegisterSubmit()\" >-->\n<!--<div class=\"form-group\">-->\n<!--<label for=\"name\">Name</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Type your name\" id=\"name\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label for=\"email\">EmailAddress</label>-->\n<!--<input type=\"email\" [(ngModel)]=\"email\" name=\"email\"  class=\"form-control\" placeholder=\"Type your email\" id=\"email\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Password</label>-->\n<!--<input type=\"password\" [(ngModel)]=\"password\" name=\"password\"  class=\"form-control\" placeholder=\"Passwotrd\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Gender</label>-->\n<!--<div class=\"form-check\">-->\n<!--<div class=\"radio\">-->\n<!--<label for=\"radio4\" class=\"form-check-label text-capitalize\">-->\n<!--<input type=\"radio\" [(ngModel)]=\"gender\" name=\"gender\"  id=\"radio4\" value=\"Male\" class=\"form-check-input\">Male-->\n<!--</label>-->\n<!--</div>-->\n<!--<div class=\"radio\">-->\n<!--<label for=\"radio5\" class=\"form-check-label text-capitalize\">-->\n<!--<input type=\"radio\" [(ngModel)]=\"gender\" name=\"gender\"  id=\"radio5\" value=\"Female\" class=\"form-check-input\">Female-->\n<!--</label >-->\n<!--</div>-->\n\n<!--</div>-->\n\n<!--</div>-->\n\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Phone number</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\"  class=\"form-control\" placeholder=\"Type your phone number\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Parent/Guardian's phone number</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"parents_phone\" name=\"parents_phone\" class=\"form-control\" placeholder=\"Type the phone number\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Country of origin</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"country\" name=\"country\"  class=\"form-control\" placeholder=\"Country name\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Address</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"address\" name=\"address\"  class=\"form-control\" placeholder=\"Address (i.e.: City, State, Zip Code)\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Mentoring Location</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"mentoring_address\" name=\"mentoring_address\"  class=\"form-control\" placeholder=\"Location (i.e.: Home, School, ...)\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Languages spoken</label>-->\n<!--<input type=\"text\"  [(ngModel)]=\"language\" name=\"language\" class=\"form-control\" placeholder=\"i.e. English, Spanish,...\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Current year level at school</label>-->\n<!--<input type=\"text\"  [(ngModel)]=\"school_level\" name=\"school_level\" class=\"form-control\" placeholder=\"Year level\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">School name</label>-->\n<!--<input type=\"text\"  [(ngModel)]=\"school_name\" name=\"school_name\" class=\"form-control\" placeholder=\"Type your school name\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Current family situation</label>-->\n<!--<input type=\"text\"   [(ngModel)]=\"family_situation\" name=\"family_situation\" class=\"form-control\" placeholder=\"i.e. Living with parents,unaccompanied minor etc\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Level of english competency</label>-->\n<!--<input type=\"text\"  [(ngModel)]=\"english_level\" name=\"english_level\" class=\"form-control\" placeholder=\"Level\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label class=\"text-capitalize\">Preferred gender of tutor</label>-->\n<!--<div class=\"form-check\">-->\n<!--<div class=\"radio\">-->\n<!--<label for=\"radio1\" class=\"form-check-label text-capitalize\">-->\n<!--<input type=\"radio\"  [(ngModel)]=\"tutor_gender\" name=\"tutor_gender\" id=\"radio1\" value=\"Male\" class=\"form-check-input\">Male-->\n<!--</label>-->\n<!--</div>-->\n<!--<div class=\"radio\">-->\n<!--<label for=\"radio2\" class=\"form-check-label text-capitalize\">-->\n<!--<input type=\"radio\" [(ngModel)]=\"tutor_gender\" name=\"tutor_gender\" id=\"radio2\" value=\"Female\" class=\"form-check-input\">Female-->\n<!--</label >-->\n<!--</div>-->\n<!--<div class=\"radio\">-->\n<!--<label for=\"radio3\" class=\"form-check-label text-capitalize \">-->\n<!--<input type=\"radio\" [(ngModel)]=\"tutor_gender\" name=\"tutor_gender\" id=\"radio3\" name=\"radios\" value=\"No Preference\" class=\"form-check-input\">No Preference-->\n<!--</label>-->\n<!--</div>-->\n<!--</div>-->\n\n<!--</div>-->\n\n<!--<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">-->\n\n<!--</form>-->\n<!--</div>-->\n<div>\n  <h2 class=\"page-header\">Student Update Form</h2>\n  <form class=\"example-form\" (submit)=\"updateStudent(student._id)\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"student.name\" name=\"name\" >\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"student.email\" name=\"email\">\n    </mat-form-field>\n\n    <mat-radio-group (change)=\"onChange($event)\" name=\"gender\">\n      <label style=\"color: gray;\">Gender : </label>\n      <mat-radio-button id=\"male\" checked=\"{{student.gender=='male'}}\"  name=\"male\" value=\"male\" style=\"color: gray;\"> Male &nbsp;</mat-radio-button>\n      <mat-radio-button id=\"female\" checked=\"{{student.gender=='female'}}\"  name=\"female\" value=\"female\" style=\"color: gray;\"> Female </mat-radio-button>\n    </mat-radio-group>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"phone\" [(ngModel)]=\"student.phone\" name=\"phone\" placeholder=\"Enter phone number\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"phone\" [(ngModel)]=\"student.parents_phone\" name=\"parents_phone\" placeholder=\"Parent/Guardian's phone number\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.country\" name=\"country\" placeholder=\"Country of origin\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.address\" name=\"address\" placeholder=\"Address\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.mentoring_address\" name=\"mentoring_address\" placeholder=\"Mentoring Location\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.language\" name=\"language\" placeholder=\"language spoken\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.school_level\" name=\"school_level\" placeholder=\"Current year level at school\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.school_name\" name=\"school_name\"  placeholder=\"Type your school name\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.family_situation\" name=\"family_situation\"  placeholder=\"Current family situation\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.english_level\" name=\"english_level\"  placeholder=\"Level of english competency.\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" [(ngModel)]=\"student.volunteering\" name=\"volunteering\" placeholder=\"Do you have any other experience in volunteering or community work?\">\n    </mat-form-field>\n\n    <label style=\"color: gray;\">Preferred gender of tutor </label>\n\n    <mat-radio-group (change)=\"onChange($event)\" name='tutor_gender'>\n      <mat-radio-button checked=\"{{student.tutor_gender=='male'}}\"  name=\"tutor_gender\" value=\"male\" style=\"color: gray;\"> Male &nbsp;</mat-radio-button>\n      <mat-radio-button checked=\"{{student.tutor_gender=='female'}}\" name=\"tutor_gender\" value=\"female\" style=\"color: gray;\"> Female </mat-radio-button>\n      <mat-radio-button checked=\"{{student.tutor_gender=='No Preference'}}\" name=\"tutor_gender\" value=\"No Preference\" style=\"color: gray;\">No Preference</mat-radio-button>\n    </mat-radio-group>\n\n\n\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" >Save</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/student/student-edit/student-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/student/student-edit/student-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function() { return StudentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentEditComponent = /** @class */ (function () {
    function StudentEditComponent(studentService, route, activatedRoute, snackBar) {
        this.studentService = studentService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.student = {};
    }
    StudentEditComponent.prototype.ngOnInit = function () {
        this.getStudent(this.activatedRoute.snapshot.params['id']);
    };
    StudentEditComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.studentService.getStudent(id).then(function (res) {
            _this.student = res;
        }, function (err) {
            console.log(err);
        });
    };
    StudentEditComponent.prototype.updateStudent = function (id) {
        var _this = this;
        this.studentService.editStudent(id, this.student).then(function (result) {
            var id = result['_id'];
            _this.route.navigate(['/student-list']);
            _this.snackBar.open('Student updated!', null, { duration: 2000 });
        }, function (err) {
            console.log(err);
        });
    };
    StudentEditComponent.prototype.onChange = function (mrChange) {
        if (mrChange.source.name === 'tutor_gender') {
            this.student['tutor_gender'] = mrChange.source.value;
        }
        if (mrChange.source.name === 'gender') {
            this.student['gender'] = mrChange.source.value;
        }
    };
    StudentEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-edit',
            template: __webpack_require__(/*! ./student-edit.component.html */ "./src/app/components/student/student-edit/student-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-edit.component.css */ "./src/app/components/student/student-edit/student-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], StudentEditComponent);
    return StudentEditComponent;
}());



/***/ }),

/***/ "./src/app/components/student/student-list/student-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/student/student-list/student-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student/student-list/student-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/student/student-list/student-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Registered Students</h1>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.email}}</td>\n    </ng-container>\n    <!-- Phone Column -->\n    <ng-container matColumnDef=\"phone\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.phone}}</td>\n    </ng-container>\n    <!-- Gender Column -->\n    <ng-container matColumnDef=\"gender\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Gender</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.gender}}</td>\n    </ng-container>\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.status}}</td>\n    </ng-container>\n    <!-- Edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Edit</th>\n      <td mat-cell *matCellDef=\"let row\"> <a [routerLink]=\"['/student-edit', row._id]\">\n        <mat-icon style=\"color: darkgreen\">edit</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <!-- Delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>\n      <td mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/student-list', row._id]\" (click)=\"deleteStudent(row._id)\" >\n        <mat-icon style=\"color: red\">delete</mat-icon>\n      </a>\n\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/student/student-list/student-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/student/student-list/student-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(studentService, router) {
        var _this = this;
        this.studentService = studentService;
        this.router = router;
        this.displayedColumns = ['id', 'name', 'email', 'phone', 'gender', 'status', 'edit', 'delete'];
        this.i = 0;
        this.isDataLoaded = false;
        this.studentService.getStudents()
            .subscribe(function (students) {
            _this.students = students;
            _this.users = [];
            for (_this.i = 0; _this.i < _this.students.length; _this.i++) {
                _this.users.push({
                    id: _this.i + 1,
                    _id: _this.students[_this.i]._id,
                    name: _this.students[_this.i].name,
                    email: _this.students[_this.i].email,
                    phone: _this.students[_this.i].phone,
                    gender: _this.students[_this.i].gender,
                    status: _this.students[_this.i].status,
                    edit: '',
                    delete: ''
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    StudentListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StudentListComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        this.studentService.deleteStudent(id).then(function (result) {
            _this.router.navigate(['/student-list']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StudentListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StudentListComponent.prototype, "sort", void 0);
    StudentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/components/student/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/components/student/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_0__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/components/subjects/subject-edit/subject-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/subjects/subject-edit/subject-edit.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subjects/subject-edit/subject-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/subjects/subject-edit/subject-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Subject Edit</h2>\n\n<form (submit)=\"updateSubject(subject._id)\" class=\"example-form\">\n\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"subject.name\" name=\"name\">\n  </mat-form-field>\n\n\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Sections\" [(ngModel)]=\"subject.sections\" name=\"sections\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"subject.description\" name=\"description\">\n  </mat-form-field>\n\n  <br/>\n  <br/>\n  <br/>\n\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/subjects/subject-edit/subject-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/subjects/subject-edit/subject-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectEditComponent", function() { return SubjectEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectEditComponent = /** @class */ (function () {
    function SubjectEditComponent(subjectService, route, activatedRoute, snackBar) {
        this.subjectService = subjectService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.subject = {};
    }
    SubjectEditComponent.prototype.ngOnInit = function () {
        this.getSubject(this.activatedRoute.snapshot.params['id']);
    };
    SubjectEditComponent.prototype.getSubject = function (id) {
        var _this = this;
        this.subjectService.getSubject(id).then(function (res) {
            _this.subject = res;
        }, function (err) {
            console.log(err);
        });
    };
    SubjectEditComponent.prototype.updateSubject = function (id) {
        var _this = this;
        this.subjectService.editSubject(id, this.subject).then(function (result) {
            var id = result['_id'];
            _this.route.navigate(['/subject-list']);
            _this.snackBar.open('Subject updated!', null, { duration: 3000 });
        }, function (err) {
            console.log(err);
        });
    };
    SubjectEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-edit',
            template: __webpack_require__(/*! ./subject-edit.component.html */ "./src/app/components/subjects/subject-edit/subject-edit.component.html"),
            styles: [__webpack_require__(/*! ./subject-edit.component.css */ "./src/app/components/subjects/subject-edit/subject-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SubjectEditComponent);
    return SubjectEditComponent;
}());



/***/ }),

/***/ "./src/app/components/subjects/subject-list/subject-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/subjects/subject-list/subject-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subjects/subject-list/subject-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/subjects/subject-list/subject-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">HBE Subjects</h1>\n<div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/subject-register']\" style=\"float:right;\">Add New\n        Subject\n    </button>\n</div>\n\n\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n    <table *ngIf=\"true\" mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n        </ng-container>\n\n        <!-- Email Column -->\n        <ng-container matColumnDef=\"sections\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Sections</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.sections}}</td>\n        </ng-container>\n        <!-- Edit Column -->\n        <ng-container matColumnDef=\"edit\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Edit</th>\n            <td mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/subject-edit', row._id]\">\n                <mat-icon style=\"color: darkgreen\">edit</mat-icon>\n            </a>\n\n            </td>\n        </ng-container>\n\n        <!-- Delete Column -->\n        <!--<ng-container matColumnDef=\"delete\">-->\n            <!--<th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>-->\n            <!--<td mat-cell *matCellDef=\"let row\">-->\n                <!--<a-->\n                   <!--(click)=\"deleteSubject(row._id)\">-->\n                    <!--<mat-icon style=\"color: red\">delete</mat-icon>-->\n                <!--</a>-->\n                <!--&lt;!&ndash;<button mat-button (click)=\"openDialog()\">Open dialog</button>&ndash;&gt;-->\n            <!--</td>-->\n        <!--</ng-container>-->\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subjects/subject-list/subject-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/subjects/subject-list/subject-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _subject_register_subject_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subject-register/subject-register.component */ "./src/app/components/subjects/subject-register/subject-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubjectListComponent = /** @class */ (function () {
    function SubjectListComponent(subjectService, dialog, router) {
        var _this = this;
        this.subjectService = subjectService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['id', 'name', 'sections', 'edit'];
        this.i = 0;
        this.isDataLoaded = false;
        this.subjectService.getSubjects()
            .subscribe(function (subjects) {
            _this.subjects = subjects;
            _this.subjectArray = [];
            for (_this.i = 0; _this.i < _this.subjects.length; _this.i++) {
                _this.subjectArray.push({
                    id: _this.i + 1,
                    _id: _this.subjects[_this.i]._id,
                    name: _this.subjects[_this.i].name,
                    sections: _this.subjects[_this.i].sections,
                    edit: '',
                    delete: ''
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.subjectArray);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    SubjectListComponent.prototype.openDialog = function () {
        this.dialog.open(_subject_register_subject_register_component__WEBPACK_IMPORTED_MODULE_4__["SubjectRegisterComponent"]);
    };
    SubjectListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SubjectListComponent.prototype.deleteSubject = function (id) {
        var _this = this;
        this.subjectService.deleteSubject(id).then(function (result) {
            _this.router.navigate(['/subject-list']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SubjectListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SubjectListComponent.prototype, "sort", void 0);
    SubjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/components/subjects/subject-list/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject-list.component.css */ "./src/app/components/subjects/subject-list/subject-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}());

// @Component({
//     selector: 'app-dialog-overview-example-dialog',
//     templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialogComponent {
//
//     constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
//                 @Inject(MAT_DIALOG_DATA) public data: DialogData) {
//     }
//
//     onNoClick(): void {
//         this.dialogRef.close();
//     }
//
// }


/***/ }),

/***/ "./src/app/components/subjects/subject-register/subject-register.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/subjects/subject-register/subject-register.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subjects/subject-register/subject-register.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/subjects/subject-register/subject-register.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Subject Registration</h2>\n\n<form (submit)=\"onRegisterSubmit(formList)\" #formList=\"ngForm\" class=\"example-form\">\n\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\n    </mat-form-field>\n\n\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Sections\" [(ngModel)]=\"sections\" name=\"sections\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\">\n    </mat-form-field>\n\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n\n</form>"

/***/ }),

/***/ "./src/app/components/subjects/subject-register/subject-register.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/subjects/subject-register/subject-register.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubjectRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectRegisterComponent", function() { return SubjectRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectRegisterComponent = /** @class */ (function () {
    function SubjectRegisterComponent(router, snackBar, subjectService) {
        this.router = router;
        this.snackBar = snackBar;
        this.subjectService = subjectService;
    }
    SubjectRegisterComponent.prototype.onRegisterSubmit = function (formList) {
        var _this = this;
        var subject = {
            name: this.name,
            description: this.description,
            sections: this.sections
        };
        this.subjectService.registerSubject(subject).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('New subject is added!', 'Dismiss', { duration: 2000 });
                _this.router.navigate(['/subject-list']);
            }
            else {
                _this.snackBar.open('Something went wrong!', 'Dismiss', { duration: 2000 });
            }
        });
    };
    SubjectRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-register',
            template: __webpack_require__(/*! ./subject-register.component.html */ "./src/app/components/subjects/subject-register/subject-register.component.html"),
            styles: [__webpack_require__(/*! ./subject-register.component.css */ "./src/app/components/subjects/subject-register/subject-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]])
    ], SubjectRegisterComponent);
    return SubjectRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/surveys/create-survey/create-survey.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/surveys/create-survey/create-survey.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/surveys/create-survey/create-survey.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/surveys/create-survey/create-survey.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h1\">New Survey</h2>\n\n<form (submit)=\"onSubmit()\" class=\"example-form\">\n\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"date\" name=\"date\" placeholder=\"Choose a date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Subject\" disabled value=\"{{subject}}\" name=\"subject\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Mentor\" disabled value=\"{{mentor}}\" name=\"mentor\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <textarea matInput rows=\"10\" type=\"textarea\" placeholder=\"Comment\" [(ngModel)]=\"comment\"\n                  name=\"comment\"></textarea>\n    </mat-form-field>\n\n    <mat-label>Rate your mentor:</mat-label>\n    <app-star-rating [rating]=\"rating\" [starCount]=\"starCount\" [color]=\"starColor\"\n                     (ratingUpdated)=\"onRatingChanged($event)\"></app-star-rating>\n\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </div>\n    <br/>\n    <br/>\n    <br/>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/surveys/create-survey/create-survey.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/surveys/create-survey/create-survey.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateSurveyComponent, StarRatingColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function() { return CreateSurveyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingColor", function() { return StarRatingColor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student-subject/student-subject.service */ "./src/app/services/student-subject/student-subject.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_survey_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/survey/survey.service */ "./src/app/services/survey/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateSurveyComponent = /** @class */ (function () {
    function CreateSurveyComponent(activatedRoute, snackBar, router, surveySerive, studentSubjectService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.router = router;
        this.surveySerive = surveySerive;
        this.studentSubjectService = studentSubjectService;
        this.studentSubjectService.getStudentSubjectsById(this.activatedRoute.snapshot.params['id']).subscribe(function (data) {
            _this.studentSubject = data;
            _this.subject = _this.studentSubject[0].subject[0].name;
            _this.mentor = _this.studentSubject[0].mentor[0].name;
            console.log(data);
        });
    }
    CreateSurveyComponent.prototype.ngOnInit = function () {
        this.starCount = 5;
        this.starColor = StarRatingColor.accent;
    };
    CreateSurveyComponent.prototype.onRatingChanged = function (rating) {
        console.log(rating);
        this.rating = rating;
    };
    CreateSurveyComponent.prototype.onSubmit = function () {
        var _this = this;
        var survey = {
            student_subject: this.studentSubject[0]._id,
            date: this.date,
            comment: this.comment,
            rating: this.rating
        };
        console.log(survey);
        this.surveySerive.registerSurvey(survey).subscribe(function (data) {
            if (data['success']) {
                _this.snackBar.open('Survey recorded', null, { duration: 1500 });
                _this.router.navigate(['/student-dashboard']);
            }
            else {
                _this.snackBar.open('Something went wrong', 'Dismiss', { duration: 2000 });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rating'),
        __metadata("design:type", Number)
    ], CreateSurveyComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('starCount'),
        __metadata("design:type", Number)
    ], CreateSurveyComponent.prototype, "starCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('color'),
        __metadata("design:type", String)
    ], CreateSurveyComponent.prototype, "starColor", void 0);
    CreateSurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-survey',
            template: __webpack_require__(/*! ./create-survey.component.html */ "./src/app/components/surveys/create-survey/create-survey.component.html"),
            styles: [__webpack_require__(/*! ./create-survey.component.css */ "./src/app/components/surveys/create-survey/create-survey.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_survey_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"],
            _services_student_subject_student_subject_service__WEBPACK_IMPORTED_MODULE_2__["StudentSubjectService"]])
    ], CreateSurveyComponent);
    return CreateSurveyComponent;
}());

var StarRatingColor;
(function (StarRatingColor) {
    StarRatingColor["primary"] = "primary";
    StarRatingColor["accent"] = "accent";
    StarRatingColor["warn"] = "warn";
})(StarRatingColor || (StarRatingColor = {}));


/***/ }),

/***/ "./src/app/data-table/data-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DataTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DataTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return DataTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/data-table/data-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table{\n    width:80%;\n    margin: 20px auto;\n}"

/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"unit w-2-3\"><div class=\"hero-callout\">\n  <table id=\"example\" class=\"display\" style=\"width:100%\"><thead><tr><th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th></tr></thead><tbody><tr><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td>2011/04/25</td><td>$320,800</td></tr><tr><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td>2011/07/25</td><td>$170,750</td></tr><tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>66</td><td>2009/01/12</td><td>$86,000</td></tr><tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>22</td><td>2012/03/29</td><td>$433,060</td></tr><tr><td>Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>33</td><td>2008/11/28</td><td>$162,700</td></tr><tr><td>Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>61</td><td>2012/12/02</td><td>$372,000</td></tr><tr><td>Herrod Chandler</td><td>Sales Assistant</td><td>San Francisco</td><td>59</td><td>2012/08/06</td><td>$137,500</td></tr><tr><td>Rhona Davidson</td><td>Integration Specialist</td><td>Tokyo</td><td>55</td><td>2010/10/14</td><td>$327,900</td></tr><tr><td>Colleen Hurst</td><td>Javascript Developer</td><td>San Francisco</td><td>39</td><td>2009/09/15</td><td>$205,500</td></tr><tr><td>Sonya Frost</td><td>Software Engineer</td><td>Edinburgh</td><td>23</td><td>2008/12/13</td><td>$103,600</td></tr><tr><td>Jena Gaines</td><td>Office Manager</td><td>London</td><td>30</td><td>2008/12/19</td><td>$90,560</td></tr><tr><td>Quinn Flynn</td><td>Support Lead</td><td>Edinburgh</td><td>22</td><td>2013/03/03</td><td>$342,000</td></tr><tr><td>Charde Marshall</td><td>Regional Director</td><td>San Francisco</td><td>36</td><td>2008/10/16</td><td>$470,600</td></tr><tr><td>Haley Kennedy</td><td>Senior Marketing Designer</td><td>London</td><td>43</td><td>2012/12/18</td><td>$313,500</td></tr><tr><td>Tatyana Fitzpatrick</td><td>Regional Director</td><td>London</td><td>19</td><td>2010/03/17</td><td>$385,750</td></tr><tr><td>Michael Silva</td><td>Marketing Designer</td><td>London</td><td>66</td><td>2012/11/27</td><td>$198,500</td></tr><tr><td>Paul Byrd</td><td>Chief Financial Officer (CFO)</td><td>New York</td><td>64</td><td>2010/06/09</td><td>$725,000</td></tr><tr><td>Gloria Little</td><td>Systems Administrator</td><td>New York</td><td>59</td><td>2009/04/10</td><td>$237,500</td></tr><tr><td>Bradley Greer</td><td>Software Engineer</td><td>London</td><td>41</td><td>2012/10/13</td><td>$132,000</td></tr><tr><td>Dai Rios</td><td>Personnel Lead</td><td>Edinburgh</td><td>35</td><td>2012/09/26</td><td>$217,500</td></tr><tr><td>Jenette Caldwell</td><td>Development Lead</td><td>New York</td><td>30</td><td>2011/09/03</td><td>$345,000</td></tr><tr><td>Yuri Berry</td><td>Chief Marketing Officer (CMO)</td><td>New York</td><td>40</td><td>2009/06/25</td><td>$675,000</td></tr><tr><td>Caesar Vance</td><td>Pre-Sales Support</td><td>New York</td><td>21</td><td>2011/12/12</td><td>$106,450</td></tr><tr><td>Doris Wilder</td><td>Sales Assistant</td><td>Sidney</td><td>23</td><td>2010/09/20</td><td>$85,600</td></tr><tr><td>Angelica Ramos</td><td>Chief Executive Officer (CEO)</td><td>London</td><td>47</td><td>2009/10/09</td><td>$1,200,000</td></tr><tr><td>Gavin Joyce</td><td>Developer</td><td>Edinburgh</td><td>42</td><td>2010/12/22</td><td>$92,575</td></tr><tr><td>Jennifer Chang</td><td>Regional Director</td><td>Singapore</td><td>28</td><td>2010/11/14</td><td>$357,650</td></tr><tr><td>Brenden Wagner</td><td>Software Engineer</td><td>San Francisco</td><td>28</td><td>2011/06/07</td><td>$206,850</td></tr><tr><td>Fiona Green</td><td>Chief Operating Officer (COO)</td><td>San Francisco</td><td>48</td><td>2010/03/11</td><td>$850,000</td></tr><tr><td>Shou Itou</td><td>Regional Marketing</td><td>Tokyo</td><td>20</td><td>2011/08/14</td><td>$163,000</td></tr><tr><td>Michelle House</td><td>Integration Specialist</td><td>Sidney</td><td>37</td><td>2011/06/02</td><td>$95,400</td></tr><tr><td>Suki Burks</td><td>Developer</td><td>London</td><td>53</td><td>2009/10/22</td><td>$114,500</td></tr><tr><td>Prescott Bartlett</td><td>Technical Author</td><td>London</td><td>27</td><td>2011/05/07</td><td>$145,000</td></tr><tr><td>Gavin Cortez</td><td>Team Leader</td><td>San Francisco</td><td>22</td><td>2008/10/26</td><td>$235,500</td></tr><tr><td>Martena Mccray</td><td>Post-Sales support</td><td>Edinburgh</td><td>46</td><td>2011/03/09</td><td>$324,050</td></tr><tr><td>Unity Butler</td><td>Marketing Designer</td><td>San Francisco</td><td>47</td><td>2009/12/09</td><td>$85,675</td></tr><tr><td>Howard Hatfield</td><td>Office Manager</td><td>San Francisco</td><td>51</td><td>2008/12/16</td><td>$164,500</td></tr><tr><td>Hope Fuentes</td><td>Secretary</td><td>San Francisco</td><td>41</td><td>2010/02/12</td><td>$109,850</td></tr><tr><td>Vivian Harrell</td><td>Financial Controller</td><td>San Francisco</td><td>62</td><td>2009/02/14</td><td>$452,500</td></tr><tr><td>Timothy Mooney</td><td>Office Manager</td><td>London</td><td>37</td><td>2008/12/11</td><td>$136,200</td></tr><tr><td>Jackson Bradshaw</td><td>Director</td><td>New York</td><td>65</td><td>2008/09/26</td><td>$645,750</td></tr><tr><td>Olivia Liang</td><td>Support Engineer</td><td>Singapore</td><td>64</td><td>2011/02/03</td><td>$234,500</td></tr><tr><td>Bruno Nash</td><td>Software Engineer</td><td>London</td><td>38</td><td>2011/05/03</td><td>$163,500</td></tr><tr><td>Sakura Yamamoto</td><td>Support Engineer</td><td>Tokyo</td><td>37</td><td>2009/08/19</td><td>$139,575</td></tr><tr><td>Thor Walton</td><td>Developer</td><td>New York</td><td>61</td><td>2013/08/11</td><td>$98,540</td></tr><tr><td>Finn Camacho</td><td>Support Engineer</td><td>San Francisco</td><td>47</td><td>2009/07/07</td><td>$87,500</td></tr><tr><td>Serge Baldwin</td><td>Data Coordinator</td><td>Singapore</td><td>64</td><td>2012/04/09</td><td>$138,575</td></tr><tr><td>Zenaida Frank</td><td>Software Engineer</td><td>New York</td><td>63</td><td>2010/01/04</td><td>$125,250</td></tr><tr><td>Zorita Serrano</td><td>Software Engineer</td><td>San Francisco</td><td>56</td><td>2012/06/01</td><td>$115,000</td></tr><tr><td>Jennifer Acosta</td><td>Junior Javascript Developer</td><td>Edinburgh</td><td>43</td><td>2013/02/01</td><td>$75,650</td></tr><tr><td>Cara Stevens</td><td>Sales Assistant</td><td>New York</td><td>46</td><td>2011/12/06</td><td>$145,600</td></tr><tr><td>Hermione Butler</td><td>Regional Director</td><td>London</td><td>47</td><td>2011/03/21</td><td>$356,250</td></tr><tr><td>Lael Greer</td><td>Systems Administrator</td><td>London</td><td>21</td><td>2009/02/27</td><td>$103,500</td></tr><tr><td>Jonas Alexander</td><td>Developer</td><td>San Francisco</td><td>30</td><td>2010/07/14</td><td>$86,500</td></tr><tr><td>Shad Decker</td><td>Regional Director</td><td>Edinburgh</td><td>51</td><td>2008/11/13</td><td>$183,000</td></tr><tr><td>Michael Bruce</td><td>Javascript Developer</td><td>Singapore</td><td>29</td><td>2011/06/27</td><td>$183,000</td></tr><tr><td>Donna Snider</td><td>Customer Support</td><td>New York</td><td>27</td><td>2011/01/25</td><td>$112,000</td></tr></tbody><tfoot><tr><th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th></tr></tfoot></table>\n</div></div>"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/data-table/data-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__["DataTableDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/data-table/data-table.component.css")]
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (route) {
        if (!this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/page-not-found']);
        return false;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function (route) {
        var expectedRole = route.data.expectedRole;
        if (!this.authService.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else if (this.authService.getUserType() !== expectedRole) {
            this.router.navigate(['/page-not-found']);
            return false;
        }
        return true;
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        // this.isDev = true;  // Change to false before deployment
    }
    AdminService.prototype.registerAdmin = function (admin) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/admins/register', admin, { headers: headers });
    };
    AdminService.prototype.authenticateAdmin = function (admin) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/admins/authenticate', admin, { headers: headers });
    };
    AdminService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AdminService.prototype.getAdmins = function () {
        return this.http.get('http://localhost:3000/admins/getAdmins');
    };
    AdminService.prototype.deleteAdmin = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/admins/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.editAdmin = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/admins/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.getAdmin = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/admins/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.helper.isTokenExpired(token);
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' });
        var userTypeToken = JSON.parse(localStorage.getItem('user'));
        if (userTypeToken.type === 'mentor') {
            return this.http.get('http://localhost:3000/mentor_subjects/profile', { headers: headers });
        }
        else if (userTypeToken.type === 'student') {
            return this.http.get('http://localhost:3000/students/profile', { headers: headers });
        }
        else if (userTypeToken.type === 'admin') {
            return this.http.get('http://localhost:3000/admins/dashboard', { headers: headers });
        }
    };
    AuthService.prototype.getUserType = function () {
        var userTypeToken = JSON.parse(localStorage.getItem('user'));
        if (userTypeToken !== null) {
            return userTypeToken.type;
        }
        return null;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        var refreshToken = Object(_app_module__WEBPACK_IMPORTED_MODULE_4__["tokenGetter"])();
        if (!this.helper.isTokenExpired(refreshToken)) {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/local_res/local-res.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/local_res/local-res.service.ts ***!
  \*********************************************************/
/*! exports provided: LocalResService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalResService", function() { return LocalResService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalResService = /** @class */ (function () {
    function LocalResService(http) {
        this.http = http;
    }
    LocalResService.prototype.registerLocalRes = function (LocalRes) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/local-res/register', LocalRes, { headers: headers });
    };
    LocalResService.prototype.getLocalRess = function () {
        return this.http.get('http://localhost:3000/local-res/getAll');
    };
    LocalResService.prototype.deleteLocalRes = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/local-res/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocalResService.prototype.editLocalRes = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/local-res/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocalResService.prototype.getLocalRes = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/local-res/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocalResService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        return this.http.post('http://localhost:3000/local-res/download', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    LocalResService.prototype.deleteFile = function (file) {
        var body = { filename: file };
        return this.http.post('http://localhost:3000/local-res/deletefile', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    LocalResService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocalResService);
    return LocalResService;
}());



/***/ }),

/***/ "./src/app/services/mentor-subject/mentor-subject.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/mentor-subject/mentor-subject.service.ts ***!
  \*******************************************************************/
/*! exports provided: MentorSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorSubjectService", function() { return MentorSubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MentorSubjectService = /** @class */ (function () {
    function MentorSubjectService(http) {
        this.http = http;
    }
    MentorSubjectService.prototype.registerMentorSubject = function (MentorSubject) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/mentor-subject/register', MentorSubject, { headers: headers });
    };
    MentorSubjectService.prototype.getMentorSubjects = function (id) {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorSubjects/' + id);
    };
    MentorSubjectService.prototype.getMentorSubjectsBySubjectId = function (id) {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorSubjectsBySubjectId/' + id);
    };
    MentorSubjectService.prototype.getMentorBySubject = function () {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorsBySubject');
    };
    MentorSubjectService.prototype.getMentorAllSubjects = function () {
        return this.http.get('http://localhost:3000/mentor-subject/getMentorAllSubjects');
    };
    MentorSubjectService.prototype.deleteMentorSubject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/mentor-subject/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MentorSubjectService.prototype.editMentorSubject = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/mentor-subject/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MentorSubjectService.prototype.getMentorSubject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/mentor-subject/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MentorSubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MentorSubjectService);
    return MentorSubjectService;
}());



/***/ }),

/***/ "./src/app/services/mentor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/mentor.service.ts ***!
  \********************************************/
/*! exports provided: MentorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorService", function() { return MentorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MentorService = /** @class */ (function () {
    function MentorService(http) {
        this.http = http;
        // this.isDev = true;  // Change to false before deployment
    }
    MentorService.prototype.registerMentor = function (mentor) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/mentor_subjects/register', mentor, { headers: headers });
    };
    MentorService.prototype.authenticateMentor = function (mentor) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/mentor_subjects/authenticate', mentor, { headers: headers });
    };
    MentorService.prototype.storeMentorData = function (token, mentor) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(mentor));
        this.authToken = token;
        this.mentor = mentor;
    };
    MentorService.prototype.getMentors = function () {
        return this.http.get('http://localhost:3000/mentor_subjects/getMentors');
    };
    MentorService.prototype.deleteMentor = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/mentor_subjects/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MentorService.prototype.editMentor = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/mentor_subjects/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MentorService.prototype.getMentor = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/mentor_subjects/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MentorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MentorService);
    return MentorService;
}());



/***/ }),

/***/ "./src/app/services/mentoring-meeting/mentoring-meeting.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/mentoring-meeting/mentoring-meeting.service.ts ***!
  \*************************************************************************/
/*! exports provided: MentoringMeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentoringMeetingService", function() { return MentoringMeetingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MentoringMeetingService = /** @class */ (function () {
    function MentoringMeetingService(http) {
        this.http = http;
    }
    MentoringMeetingService.prototype.registerMentoringMeeting = function (MentoringMeeting) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/mentoring-meeting/register', MentoringMeeting, { headers: headers });
    };
    MentoringMeetingService.prototype.countMentoringMeetingById = function (id) {
        return this.http.get('http://localhost:3000/mentoring-meeting/getMentoringMeetingCount/' + id);
    };
    MentoringMeetingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MentoringMeetingService);
    return MentoringMeetingService;
}());



/***/ }),

/***/ "./src/app/services/online_res/online-res.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/online_res/online-res.service.ts ***!
  \***********************************************************/
/*! exports provided: OnlineResService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineResService", function() { return OnlineResService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnlineResService = /** @class */ (function () {
    function OnlineResService(http) {
        this.http = http;
    }
    OnlineResService.prototype.registerOnlineRes = function (OnlineRes) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/online-res/register', OnlineRes, { headers: headers });
    };
    OnlineResService.prototype.getOnlineRess = function () {
        return this.http.get('http://localhost:3000/online-res/getAll');
    };
    OnlineResService.prototype.deleteOnlineRes = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/online-res/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OnlineResService.prototype.editOnlineRes = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/online-res/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OnlineResService.prototype.getOnlineRes = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/online-res/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OnlineResService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OnlineResService);
    return OnlineResService;
}());



/***/ }),

/***/ "./src/app/services/student-subject/student-subject.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/student-subject/student-subject.service.ts ***!
  \*********************************************************************/
/*! exports provided: StudentSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSubjectService", function() { return StudentSubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentSubjectService = /** @class */ (function () {
    function StudentSubjectService(http) {
        this.http = http;
    }
    StudentSubjectService.prototype.registerStudentSubject = function (StudentSubject) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/student-subject/register', StudentSubject, { headers: headers });
    };
    StudentSubjectService.prototype.getStudentSubjects = function (id) {
        return this.http.get('http://localhost:3000/student-subject/getStudentSubjects' + id);
    };
    StudentSubjectService.prototype.getStudentSubjectsById = function (id) {
        return this.http.get('http://localhost:3000/student-subject/getStudentSubjectsById/' + id);
    };
    StudentSubjectService.prototype.getStudentSubjectsByMentor = function (id) {
        return this.http.get('http://localhost:3000/student-subject/getStudentSubjectsByMentor' + id);
    };
    StudentSubjectService.prototype.getStudentSubjectsByStudentId = function (id) {
        return this.http.get('http://localhost:3000/student-subject/getStudentSubjectsByStudentId' + id);
    };
    StudentSubjectService.prototype.getStudentSubjectsByMentorId = function (id) {
        return this.http.get('http://localhost:3000/student-subject/getStudentSubjectsByMentorId' + id);
    };
    StudentSubjectService.prototype.getUnassignedStudentSubjects = function () {
        return this.http.get('http://localhost:3000/student-subject/getUnassignedStudentSubjects');
    };
    StudentSubjectService.prototype.deleteStudentSubject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/student-subject/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSubjectService.prototype.editStudentSubject = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/student-subject/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSubjectService.prototype.getStudentSubject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/student-subject/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentSubjectService);
    return StudentSubjectService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        // this.isDev = true;  // Change to false before deployment
    }
    StudentService.prototype.registerStudent = function (student) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/students/register', student, { headers: headers });
    };
    StudentService.prototype.authenticateStudent = function (student) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/students/authenticate', student, { headers: headers });
    };
    StudentService.prototype.storeStudentData = function (token, student) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(student));
        this.authToken = token;
        this.student = student;
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get('http://localhost:3000/students/getStudents');
    };
    StudentService.prototype.deleteStudent = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/students/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentService.prototype.editStudent = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/students/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentService.prototype.getStudent = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/students/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/services/subject.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
    }
    SubjectService.prototype.registerSubject = function (subject) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/subjects/register', subject, { headers: headers });
    };
    SubjectService.prototype.getSubjects = function () {
        return this.http.get('http://localhost:3000/subjects/getSubjects');
    };
    SubjectService.prototype.deleteSubject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/subjects/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SubjectService.prototype.editSubject = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(' http://localhost:3000/subjects/' + id, data)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SubjectService.prototype.getSubject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/subjects/' + id)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/services/survey/survey.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/survey/survey.service.ts ***!
  \***************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
    }
    SurveyService.prototype.registerSurvey = function (Survey) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/survey/register', Survey, { headers: headers });
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aalem/Desktop/meanauthapp-master/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map