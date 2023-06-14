import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appConfig } from '../../../shared/config/app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = `${appConfig.projectName} | Dashboard`;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
