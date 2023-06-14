import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilityService } from '../../../shared/services/utility.service';
import { ReferFriendService } from './refer-friend.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private _referFriendService: ReferFriendService,
    private _utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.formGroup = this._referFriendService.createForm();
  }

  submit() {
    const data = this.formGroup.getRawValue();
    this._referFriendService.referFriend(data.email).then((response: any) => {
      if (response && response.status === 'OK') {
        this.formGroup.reset();
        this._utilityService.successMessage(response.message, 'OK');
      } else {
        this._utilityService.successMessage(response.message, 'ERROR');
      }
    })
  }

}
