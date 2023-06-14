import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SessionService } from '../session.service';

@Injectable()
export class RoleGuardService implements CanActivate {

    constructor(public loginService: SessionService, public router: Router, public jwtHelper: JwtHelperService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;

        const token: any = localStorage.getItem('fwmUserToken');

        // decode the token to get its payload
        const tokenPayload = this.jwtHelper.decodeToken(token);

        if (!this.loginService.isAuthenticated() || tokenPayload.role !== expectedRole) {
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    }

}