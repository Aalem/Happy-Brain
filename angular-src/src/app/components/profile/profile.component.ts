import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    public user: any;

    constructor(public authService: AuthService,
                public router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

}
