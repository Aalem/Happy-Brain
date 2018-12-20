import {Router} from '@angular/router';
import {SubjectService} from '../../../services/subject.service';

import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-subject-list',
    templateUrl: './subject-list.component.html',
    styleUrls: ['./subject-list.component.css']
})


export class SubjectListComponent {

    subjects: any;
    displayedColumns: string[] = ['id', 'name', 'edit'];
    dataSource: MatTableDataSource<Object>;
    subjectArray: any;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    i = 0;

    constructor(private subjectService: SubjectService,
                private router: Router) {
        this.isDataLoaded = false;
        this.subjectService.getSubjects()
            .subscribe(subjects => {
                this.subjects = subjects;
                this.subjectArray = [];
                for (this.i = 0; this.i < this.subjects.length; this.i++) {
                    this.subjectArray.push({
                        id: this.i + 1,
                        _id: this.subjects[this.i]._id,
                        name: this.subjects[this.i].name
                        // sections: this.subjects[this.i].sections
                    });
                }

                this.dataSource = new MatTableDataSource(this.subjectArray);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.isDataLoaded = true;
            });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteSubject(id) {
        this.subjectService.deleteSubject(id).then((result) => {
            this.router.navigate(['/subject-list']);
        }, (err) => {
            console.log(err);
        });
    }

}