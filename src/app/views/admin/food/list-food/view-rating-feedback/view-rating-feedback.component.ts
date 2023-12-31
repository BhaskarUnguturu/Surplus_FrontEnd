import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-view-rating-feedback',
  templateUrl: './view-rating-feedback.component.html',
  styleUrls: ['./view-rating-feedback.component.css']
})
export class ViewRatingFeedbackComponent implements OnInit {
  rating: any;
  feedback: any;

  constructor(public matDialogRef: MatDialogRef<ViewRatingFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {
    matDialogRef.disableClose = true;
  }

  ngOnInit() {
  }

}
