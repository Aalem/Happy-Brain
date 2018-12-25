import {SubjectService} from '../../../services/subject.service';

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {ConfirmComponent} from '../../dialogs/confirm/confirm.component';

@Component({
    selector: 'app-subject-list',
    templateUrl: './subject-list.component.html',
    styleUrls: ['./subject-list.component.css']
})


export class SubjectListComponent {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    subjects: any;
    displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
    dataSource: MatTableDataSource<Object>;
    subjectArray: any = [];

    isDataLoaded: boolean;

    constructor(private subjectService: SubjectService,
                private snackBar: MatSnackBar,
                private matDialog: MatDialog) {
        this.isDataLoaded = false;
        this.subjectService.getSubjects()
            .subscribe(subjects => {
                for (const index in subjects) {
                    this.subjectArray.push({
                        id: Number(index) + 1,
                        _id: subjects[index]._id,
                        name: subjects[index].name
                    });
                }

                this.dataSource = new MatTableDataSource(this.subjectArray);
                setTimeout(() => this.dataSource.paginator = this.paginator);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.isDataLoaded = true;
            });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteSubject(id, index) {
        this.subjectService.deleteSubject(id).then((result) => {
            this.subjectArray.splice(index, 1);
            this.dataSource = new MatTableDataSource(this.subjectArray);
            this.snackBar.open('Subject Deleted', null, {duration: 1500});
        }, (err) => {
            console.log(err);
        });
    }

    deleteSubjectDialog(id, index) {
        const dialogRef = this.matDialog.open(ConfirmComponent, {
            data: {
                title: 'Deletion',
                message: 'Are you sure you want to delete this subject?',
                warning: 'This action can\'t be reverted!'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result === 'true') {
                this.deleteSubject(id, index);
            }
        });
    }
}
