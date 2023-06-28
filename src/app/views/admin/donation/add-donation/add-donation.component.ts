import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    public _constantService: ConstantService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.formGroup = this._donationService.createForm();
    if (_activatedRoute.snapshot.params['id']) {
      this.pageType = 'edit';
      _donationService.getDataById(_activatedRoute.snapshot.params['id']).then((response: any) => {
        if (response && response.status === 'OK') {
          this.formGroup = this._donationService.createForm(response.data);
        }
      })
    }
  }

  ngOnInit(): void {

  }

  submit() {
    const data = this.formGroup.getRawValue();
    this._donationService.addOrUpdateData(data, this._activatedRoute.snapshot.params['id'] ? this._activatedRoute.snapshot.params['id'] : null);
  }
}