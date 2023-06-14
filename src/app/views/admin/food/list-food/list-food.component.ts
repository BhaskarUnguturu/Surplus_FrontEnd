import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from '../../../../shared/services/utility.service';
import { FoodService } from '../food.service';
import { RatingFeedbackComponent } from './rating-feedback/rating-feedback.component';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'type', 'quantity', 'expirationDate', 'dietaryRestrictions', 'schedulingDateTime', 'typeOfDonation', 'action'];
  dataSource: any;
  sessionUser: any;

  constructor(
    private _foodService: FoodService,
    public _utilityService: UtilityService,
    private _matDialog: MatDialog
  ) {
    this.sessionUser = _utilityService.getSessionUser();
  }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this._foodService.getDataListByUserId(this.sessionUser.id).then((response: any) => {
      this.dataSource = response.data;
    })
  }

  addRating(id: any) {
    let dialogRef = this._matDialog.open(RatingFeedbackComponent, {
      panelClass: 'contact-form-dialig',
      width: '500px',
      data: id
    });
  }

  export() {

  }
}
