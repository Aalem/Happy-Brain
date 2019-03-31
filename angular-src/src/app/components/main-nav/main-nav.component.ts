import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/messages/message.service';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    notifications: any;
    user: any;
    userId: any;
    constructor(private breakpointObserver: BreakpointObserver,
                private router: Router,
                public authService: AuthService,
                public  messageService: MessageService) {
        this.notifications = 0;
    }

    loadNotificationsCount() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user != null) {
            if (this.user.type === 'admin') {
                this.userId = '1';
            } else {
                this.userId = this.user.id;
            }
            this.messageService.countNotificationsByUserId(this.userId).subscribe(n => {
                if (this.notifications < n) {
                    const audio = new Audio();
                    audio.src = '../../../assets/audio/notification.mp3';
                    audio.load();
                    audio.play();
                }
                this.notifications = n;
            });
        }
    }

    ngOnInit() {
        this.loadNotificationsCount();

        setInterval(() => this.loadNotificationsCount(), 5000);
    }

    logout(drawer) {
        this.authService.logout();
        this.router.navigate(['/login']);
        drawer.close();
    }


    goToDashboard() {
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
    }

}
