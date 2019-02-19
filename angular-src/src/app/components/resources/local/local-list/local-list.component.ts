import {Router} from '@angular/router';
import {LocalResService} from '../../../../services/local_res/local-res.service';
import {saveAs} from 'file-saver';
import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../../services/auth.service';
import {ConfirmComponent} from "../../../dialogs/confirm/confirm.component";

@Component({
    selector: 'app-local-list',
    templateUrl: './local-list.component.html',
    styleUrls: ['./local-list.component.css']
})
export class LocalListComponent {
    displayedColumnsAdmin: string[] = ['id', 'title', 'description', 'subject', 'download', 'delete'];
    displayedColumns: string[] = ['id', 'title', 'description', 'subject', 'download'];
    dataSource: MatTableDataSource<Object>;
    isAdmin: boolean;

    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    resources: any;

    constructor(private authService: AuthService,
                private localResService: LocalResService,
                private matDialog: MatDialog,
                private router: Router,
                private snackBar: MatSnackBar) {
        this.isDataLoaded = false;
        this.isAdmin = false;
        this.localResService.getLocalRess()
            .subscribe(resources => {
                this.resources = [];
                for (const index in resources) {
                    this.resources.push({
                        id: Number(index) + 1,
                        _id: resources[index]._id,
                        subject: resources[index].subject,
                        title: resources[index].title,
                        description: resources[index].description,
                        fileUplaod: resources[index].fileUplaod
                    });
                }
                this.dataSource = new MatTableDataSource(this.resources);
                setTimeout(() => this.dataSource.paginator = this.paginator);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.isDataLoaded = true;
            });
        this.isAdmin = this.authService.getUserType() === 'admin';
    }

    deleteFile(index) {
        // deleteRes(id);
        const fileUplaod = this.resources[index].fileUplaod;

        this.localResService.deleteFile(fileUplaod)
            .subscribe(
                data => saveAs(data, fileUplaod),
                error => console.error(error)
            );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteRes(id) {
        this.localResService.deleteLocalRes(id).then((result) => {
            // this.router.navigate(['/local-list']);
            for (const index in this.resources) {
                if (id === this.resources[index]._id) {
                    this.deleteFile(index);
                    this.resources.splice(index, 1);
                    break;
                }
            }
            this.dataSource = new MatTableDataSource(this.resources);
        }, (err) => {
            console.log(err);
        });
    }

    download(index) {
        const fileUplaod = this.resources[index].fileUplaod;
        this.localResService.downloadFile(fileUplaod)
            .subscribe(
                data => saveAs(data, fileUplaod),
                error => this.snackBar.open('File Not Found', 'Dismiss', {duration: 2500})
            );

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
