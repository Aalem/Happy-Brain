import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/page-not-found']);
        return false;
    }


}
