import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { ListFoodComponent } from './list-food/list-food.component';
import { ViewFoodComponent } from './view-food/view-food.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { RatingFeedbackComponent } from './list-food/rating-feedback/rating-feedback.component';
import { ViewRatingFeedbackComponent } from './list-food/view-rating-feedback/view-rating-feedback.component';
import { MatChipsModule } from '@angular/material/chips';
import { DonationModule } from '../donation/donation.module';

@NgModule({
  declarations: [
    ListFoodComponent,
    ViewFoodComponent,
    RatingFeedbackComponent,
    ViewRatingFeedbackComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTreeModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatChipsModule,
    DonationModule
  ]
})
export class FoodModule { }
