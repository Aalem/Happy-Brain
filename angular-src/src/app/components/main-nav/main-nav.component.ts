import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver,
                private router: Router,
                public authService: AuthService) {


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
