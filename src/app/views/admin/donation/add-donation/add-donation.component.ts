import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstantService } from '../../../../shared/services/constant.service';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.scss']
})
export class AddDonationComponent implements OnInit {

  formGroup!: FormGroup;
  pageType: any = 'add';

  constructor(
    public _donationService: DonationService,
    public _constantService: ConstantService
  ) { }

  ngOnInit(): void {
    this.formGroup = this._donationService.createForm();
  }

  submit() {
    const data = this.formGroup.getRawValue();
    this._donationService.addOrUpdateData(data, this.pageType);
  }
}