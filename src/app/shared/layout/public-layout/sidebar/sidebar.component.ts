import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  dataList: any = [];
  dataList2: any = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.dataList.push({
      title: 'Best Sellers',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'New Releases',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList.push({
      title: 'Movers & Shakers',
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

    this.dataList2.push({
      title: 'Prize Video',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList2.push({
      title: 'Amazon Music',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList2.push({
      title: 'Echo & Alexa',
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
    this.dataList2.push({
      title: 'Fire Tablets',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList2.push({
      title: 'Fire TV',
      icon: 'dashboard',
      link: '/admin/dashboard',
      type: 'link'
    });
    this.dataList2.push({
      title: 'Kindle E-readers & Books',
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
