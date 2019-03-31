import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../../../services/messages/message.service';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CommentComponent} from '../../surveys/comment-dialog/comment/comment.component';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {
    displayedColumns: string[] = ['id', 'title', 'date', 'message', 'delete'];
    dataSource: MatTableDataSource<Object>;

    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    notifications: any;
    userId: any;
    user: any;

    constructor(private messageService: MessageService,
                private router: Router,
                private matDialog: MatDialog) {
        this.isDataLoaded = false;

        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.type === 'admin') {
            this.userId = '1';
        } else {
            this.userId = this.user.id;
        }
        this.notifications = [];

        this.messageService.getNotificationsByUserId(this.userId).subscribe(data => {
            for (const index in data) {
                this.notifications.push({
                    id: Number(index) + 1,
                    _id: data[index]._id,
                    title: data[index].title,
                    message: data[index].message,
                    date: data[index].date,
                    seen: data[index].seen
                });
            }
            this.dataSource = new MatTableDataSource(this.notifications);
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

    deleteNotification(id) {

        this.messageService.deleteNotification(id).then((result) => {
            for (const index in this.notifications) {
                if (id === this.notifications[index]._id) {
                    this.notifications.splice(index, 1);
                    break;
                }
            }
            this.dataSource = null;
            this.dataSource = new MatTableDataSource(this.notifications);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, (err) => {
            console.log(err);
        });
    }


    showMessage(row) {
        const dialogRef = this.matDialog.open(CommentComponent, {data: row.message});
        this.messageService.editMessage(row._id, {seen: true});
        this.notifications[row.id - 1].seen = true;
        this.dataSource = null;
        this.dataSource = new MatTableDataSource(this.notifications);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }


}
