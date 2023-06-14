import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  fixedInViewport: boolean = false;
  isOpened: boolean = false;
  mode: any = "over";
  sessionUser: any;

  constructor(
  ) { }

  ngOnInit() {
    if (window.outerWidth <= 600) {
      this.isOpened = false;
      this.fixedInViewport = true;
      this.mode = "over";
    }
  }

}
