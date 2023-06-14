import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    sessionUser: any;
    menuItems = new BehaviorSubject<any[]>([]);
    navbar: any[] = [];

    constructor(
    ) {
        this.setNavigation();
    }

    setNavigation() {
        this.navbar = [];
        this.navbar.push({
            title: 'Dashboard',
            icon: 'dashboard',
            link: '/admin/dashboard',
            type: 'link'
        });

        this.navbar.push({
            title: 'User',
            icon: 'dashboard',
            link: '/admin/user',
            type: 'link'
        });

        this.navbar.push({
            title: 'Donation',
            icon: 'dashboard',
            link: '/admin/food',
            type: 'link'
        });

        this.navbar.push({
            title: 'Refer Friend',
            icon: 'dashboard',
            link: '/admin/refer-friend',
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
