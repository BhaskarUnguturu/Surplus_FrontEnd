import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstantService } from '../../../../shared/services/constant.service';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  formGroup!: FormGroup;
  pageType: any = 'add';

  constructor(
    private _foodService: FoodService,
    public _constantService: ConstantService
  ) { }

  ngOnInit(): void {
    this.formGroup = this._foodService.createForm();
  }

  submit() {
    const data = this.formGroup.getRawValue();
    this._foodService.addOrUpdateData(data, this.pageType);
  }

}
