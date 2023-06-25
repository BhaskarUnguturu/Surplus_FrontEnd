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
            title: 'Food Inventory',
            icon: 'dashboard',
            link: '/admin/food',
            type: 'link'
        });

        if (this.sessionUser && (this.sessionUser.role === 5 || this.sessionUser.role === 6)) {
            this.navbar.push({
                title: 'Refer Friend',
                icon: 'dashboard',
                link: '/admin/refer-friend',
                type: 'link'
            });
        }
        if (this.sessionUser && (this.sessionUser.role === 0 || this.sessionUser.role === 1 || this.sessionUser.role === 2 || this.sessionUser.role === 3 || this.sessionUser.role === 4)) {
            this.navbar.push({
                title: 'Contact',
                icon: 'dashboard',
                link: '/admin/contact',
                type: 'link'
            });
        }

        this.menuItems.next(this.navbar);
    }
}

}
