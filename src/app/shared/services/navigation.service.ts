import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    sessionUser: any;
    menuItems = new BehaviorSubject<any[]>([]);
    navbar: any[] = [];

    constructor(
        private _utilityService: UtilityService
    ) {
        this.setNavigation();
    }

    setNavigation() {
        this.sessionUser = this._utilityService.getSessionUser();
        this.navbar = [];
        this.navbar.push({
            title: 'Dashboard',
            icon: 'dashboard',
            link: '/admin/dashboard',
            type: 'link'
        });

        if (this.sessionUser && this.sessionUser.role === 0) {
            this.navbar.push({
                title: 'User',
                icon: 'dashboard',
                link: '/admin/user',
                type: 'link'
            });
        }

        this.navbar.push({
            title: 'Donation',
            icon: 'dashboard',
            link: '/admin/food',
            type: 'link'
        });

        this.navbar.push({
            title: 'Refer Friend',
            icon: 'dashboard',
            //link: '/admin/refer-friend',
            type: 'link'
        });

        // this.navbar.push({
        //     title: 'Report',
        //     icon: 'dashboard',
        //     link: '/admin/report',
        //     type: 'link'
        // });

        this.menuItems.next(this.navbar);
    }
}
