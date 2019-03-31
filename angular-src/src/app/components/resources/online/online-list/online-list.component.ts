import {OnlineResService} from '../../../../services/online_res/online-res.service';
import {Router} from '@angular/router';

import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../../services/auth.service';
import {ConfirmComponent} from '../../../dialogs/confirm/confirm.component';

@Component({
    selector: 'app-online-list',
    templateUrl: './online-list.component.html',
    styleUrls: ['./online-list.component.css']
})
export class OnlineListComponent {
    displayedColumnsAdmin: string[] = ['id', 'title', 'description', 'subject', 'download', 'edit', 'delete'];
    displayedColumns: string[] = ['id', 'title', 'description', 'subject', 'download'];
    dataSource: MatTableDataSource<Object>;
    isAdmin: boolean;

    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    resources: any;

    constructor(private onlineService: OnlineResService,
                private router: Router,
                private matDialog: MatDialog,
                private  authService: AuthService) {
        this.isDataLoaded = false;
        this.isAdmin = false;

        this.onlineService.getOnlineRess()
            .subscribe(resources => {
                this.resources = [];
                for (const index in resources) {
                    this.resources.push({
                        id: Number(index) + 1,
                        _id: resources[index]._id,
                        subject: resources[index].subject,
                        title: resources[index].title,
                        description: resources[index].description,
                        link: resources[index].link
                    });
                }
                this.dataSource = new MatTableDataSource(this.resources);
                setTimeout(() => this.dataSource.paginator = this.paginator);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.isDataLoaded = true;
            });
        this.isAdmin = this.authService.getUserType() === 'admin';
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteRes(id) {

        this.onlineService.deleteOnlineRes(id).then((result) => {
            for (const index in this.resources) {
                if (id === this.resources[index]._id) {
                    this.resources.splice(index, 1);
                    break;
                }
            }
            this.dataSource = new MatTableDataSource(this.resources);
        }, (err) => {
            console.log(err);
        });
    }

    deleteResDialog(id, index) {
        const dialogRef = this.matDialog.open(ConfirmComponent, {
            data: {
                title: 'Deletion',
                message: 'Are you sure you want to delete this resource?',
                warning: 'This action can\'t be reversed!'
            }});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result === 'true') {
                this.deleteRes(id);
            }
        });
    }
}
