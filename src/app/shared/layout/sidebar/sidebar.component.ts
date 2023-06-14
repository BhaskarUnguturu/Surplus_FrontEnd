import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, appConfig } from '../../config/app.config';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navbarList: any = [];
  sessionUser: any;
  appConfig: AppConfig = appConfig;

  constructor(
    private _router: Router,
    private _navigationService: NavigationService
  ) {
    _navigationService.menuItems.subscribe((response: any) => {
      this.navbarList = response;
    })
  }

  ngOnInit() {
  }

  onClickNavBar(navbar: any) {
    let element = document.getElementById("toggleButton");
    if (element)
      element.click();
    this._router.navigateByUrl(navbar);
  }

}
