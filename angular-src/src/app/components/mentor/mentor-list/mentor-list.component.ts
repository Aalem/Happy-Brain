import {MentorService} from '../../../services/mentor.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ExportExcelService} from '../../../services/export-excel/export-excel.service';
import {MentorDetailsComponent} from '../details/mentor-details.component';
import {ConfirmComponent} from "../../dialogs/confirm/confirm.component";

@Component({
    selector: 'app-mentor-list',
    templateUrl: './mentor-list.component.html',
    styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent {
    displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'gender', 'delete'];
    dataSource: MatTableDataSource<Object>;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    mentors: any;
    users: any;
    i = 0;

    constructor(private mentorService: MentorService,
                private excelService: ExportExcelService,
                private matDialog: MatDialog,
                private router: Router) {
        this.isDataLoaded = false;
        this.mentors = [];
        this.mentorService.getMentors()
            .subscribe(mentors => {
                this.users = [];
                for (const index in mentors) {
                    this.users.push({
                        id: Number(index) + 1,
                        _id: mentors[index]._id,
                        name: mentors[index].name,
                        email: mentors[index].email,
                        phone: mentors[index].phone,
                        gender: mentors[index].gender,
                        mentor: mentors[index],
                    });

                    this.mentors.push({
                        No: Number(index) + 1,
                        Name: mentors[index].name,
                        Email: mentors[index].email,
                        Phone: mentors[index].phone,
                        Gender: mentors[index].gender,
                        Subjects: mentors[index].subjects,
                        VCE_Subjects: mentors[index].vce_subjects,
                        CurrentlyStudying: mentors[index].studying,
                        Language: mentors[index].language,
                        Volunteering: mentors[index].volunteering,
                        Experience: mentors[index].experience,
                        RefugeeDefinition: mentors[index].refugee_definition,
                        LocationAndCoverage: mentors[index].location,
                        AboutUs: mentors[index].about_us,
                        StudentPreference: mentors[index].preference
                    });
                }
                this.dataSource = new MatTableDataSource(this.users);
                setTimeout(() => this.dataSource.paginator = this.paginator);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.isDataLoaded = true;
            });
    }

    deleteMentor(id) {
        this.mentorService.deleteMentor(id).then((result) => {
            this.router.navigate(['/mentor-list']);
        }, (err) => {
            console.log(err);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog(mentor) {
        const dialogRef = this.matDialog.open(MentorDetailsComponent, {data: mentor});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    deleteMentorDialog(id) {
        const dialogRef = this.matDialog.open(ConfirmComponent, {
            data: {
                title: 'Deletion',
                message: 'Are you sure you want to delete this mentor?',
                warning: 'This action can\'t be reversed!'
            }});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result === 'true') {
                this.deleteMentor(id);
            }
        });
    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.mentors, 'HBE Registered Mentors');
    }

}
