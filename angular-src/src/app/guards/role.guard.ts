import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRole = route.data.expectedRole;
        if (!this.authService.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        } else if (this.authService.getUserType() !== expectedRole) {
            this.router.navigate(['/page-not-found']);
            return false;
        }
        return true;
    }


}
