import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

  dataList: any = [];
  dataList2: any = [];

  constructor(
  ) { }

  ngOnInit() {
    this.dataList.push({
      title: 'Your Account',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Your Account',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Your Wishlist',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Your Recommandations',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });

    this.dataList.push({
      title: 'Your Prime Membership',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });

    this.dataList.push({
      title: 'Your Prime Video',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Your Subscribe & Save Items',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link',
      sub: [
        {
          title: 'Catelog 3.1',
          icon: 'dashboard',
          link: '/admin/dashboard',
          type: 'link'
        },
        {
          title: 'Catelog 3.2',
          icon: 'dashboard',
          link: '/admin/dashboard',
          type: 'link'
        }
      ]
    });
    this.dataList.push({
      title: 'Memberships & Subscriptions',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Your Seller Account',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Manage Your Content & Devices',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
  }

  onClickNavBar(navbar: any) {
    let element = document.getElementById("toggleButtonLeft");
    if (element)
      element.click();
  }

}
