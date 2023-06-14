import { Component, OnInit } from '@angular/core';
import { appConfig, AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-footer-line',
  templateUrl: './footer-line.component.html',
  styleUrls: ['./footer-line.component.css']
})
export class FooterLineComponent implements OnInit {

  appConfig: AppConfig = appConfig;
  currentYear: any = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
