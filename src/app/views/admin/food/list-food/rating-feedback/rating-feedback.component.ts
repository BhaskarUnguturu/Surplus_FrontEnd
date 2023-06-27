import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-rating-feedback',
  templateUrl: './rating-feedback.component.html',
  styleUrls: ['./rating-feedback.component.css']
})
export class RatingFeedbackComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public matDialogRef: MatDialogRef<RatingFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _foodService: FoodService
  ) {
    matDialogRef.disableClose = true;
    this.formGroup = _foodService.createRatingFeedbackForm();
  }

  ngOnInit() {
  }

  async submit() {
    const data = this.formGroup.getRawValue();
    if (data.rating) {
      await this._foodService.addRating({ foodId: this._data, rating: data.rating });
    }
    if (data.feedback) {
      await this._foodService.addFeedback({ foodId: this._data, feedback: data.feedback });
    }
    this.matDialogRef.close(true);
  }

}
