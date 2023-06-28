import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from '../../../../shared/services/utility.service';
import { DonationService } from '../../donation/donation.service';
import { StatusTrackingComponent } from '../../donation/list-donation/status-tracking/status-tracking.component';
import { FoodService } from '../food.service';
import { RatingFeedbackComponent } from './rating-feedback/rating-feedback.component';
import { ViewRatingFeedbackComponent } from './view-rating-feedback/view-rating-feedback.component';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'type', 'quantity', 'expirationDate', 'dietaryRestrictions', 'schedulingDateTime', 'typeOfDonation', 'donorName', 'receipentName', 'distributionDate', 'status', 'foodRequest', 'action'];
  dataSource: any;
  sessionUser: any;

  constructor(
    public _foodService: FoodService,
    public _utilityService: UtilityService,
    private _matDialog: MatDialog,
    public _donationService: DonationService
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

  addRating(id: any) {
    let dialogRef = this._matDialog.open(RatingFeedbackComponent, {
      panelClass: 'contact-form-dialig',
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        this.getDataList();
      }
    })
  }

  viewRatingAndFeedback(element: any) {
    let dialogRef = this._matDialog.open(ViewRatingFeedbackComponent, {
      panelClass: 'contact-form-dialig',
      width: '400px',
      data: element
    });
  }

  export() {
    this._foodService.exportData(this.dataSource);
  }

  accept(id: any) {
    this._foodService.accept(id).then((response: any) => {
      if (response && response.status === 'OK') {
        this._utilityService.successMessage(response.message, response.status);
        this.getDataList();
      } else {
        this._utilityService.successMessage(response.message, response.status);
      }
    })
  }

  reject(id: any) {
    this._foodService.reject(id).then((response: any) => {
      if (response && response.status === 'OK') {
        this._utilityService.successMessage(response.message, response.status);
        this.getDataList();
      } else {
        this._utilityService.successMessage(response.message, response.status);
      }
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
