import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appConfig } from '../../../shared/config/app.config';
import { UtilityService } from '../../../shared/services/utility.service';
import { FoodService } from '../food/food.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = `${appConfig.projectName} | Dashboard`;
  dataResponse: any;
  sessionUser: any;

  constructor(
    private titleService: Title,
    private _foodService: FoodService,
    private _utilityService: UtilityService
  ) {
    this.titleService.setTitle(this.title);
    this.sessionUser = _utilityService.getSessionUser();
  }

  ngOnInit(): void {
    this._foodService.getDashboardData().then((response: any) => {
      this.dataResponse = response.data;
    })
  }

}
