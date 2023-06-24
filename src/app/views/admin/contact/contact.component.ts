import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../shared/services/utility.service';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'name', 'email', 'mobileNumber', 'message', 'createdAt'];
  dataSource: any;
  sessionUser: any;

  constructor(
    public _contactService: ContactService,
    public _utilityService: UtilityService
  ) {
    this.sessionUser = _utilityService.getSessionUser();
  }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this._contactService.getDataList().then((response: any) => {
      this.dataSource = response.data;
    })
  }

}
