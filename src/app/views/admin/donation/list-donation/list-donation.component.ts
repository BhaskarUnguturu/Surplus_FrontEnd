import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from '../../../../shared/services/utility.service';
import { DonationService } from '../donation.service';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';

@Component({
  selector: 'app-list-donation',
  templateUrl: './list-donation.component.html',
  styleUrls: ['./list-donation.component.scss']
})
export class ListDonationComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'type', 'quantity', 'expirationDate', 'dietaryRestrictions', 'schedulingDateTime', 'typeOfDonation', 'status', 'action'];
  dataSource: any;
  sessionUser: any;

  constructor(
    public _foodService: DonationService,
    public _utilityService: UtilityService,
    private _matDialog: MatDialog
  ) {
    this.sessionUser = _utilityService.getSessionUser();
  }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this._foodService.getDataList().then((response: any) => {
      this.dataSource = response.data;
    })
  }

  statusTracking(status: any) {
    let dialogRef = this._matDialog.open(StatusTrackingComponent, {
      panelClass: 'contact-form-dialig',
      width: '1000px',
      data: status
    });
  }

}
