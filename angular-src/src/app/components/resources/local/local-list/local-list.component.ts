import {Router} from '@angular/router';
import {LocalResService} from '../../../../services/local_res/local-res.service';
import {saveAs} from 'file-saver';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../../services/auth.service';

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

    constructor(private authService: AuthService, private localResService: LocalResService, private router: Router, private snackBar: MatSnackBar) {
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
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        this.isAdmin = this.authService.getUserType() === 'admin';
    }

    deleteFile(index) {
        // deleteRes(id);
        var fileUplaod = this.resources[index].fileUplaod;

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

    deleteRes(id, i) {
        this.deleteFile(i - 1);
        this.localResService.deleteLocalRes(id).then((result) => {
            this.router.navigate(['/local-list']);
            this.resources.splice(i - 1, 1);
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


}
