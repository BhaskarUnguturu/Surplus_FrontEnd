import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilityService } from '../../../shared/services/utility.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public _userService: UserService,
    private _utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.formGroup = this._userService.createReferFriendForm();
  }

  submit() {
    const data = this.formGroup.getRawValue();
    let formData = new FormData();
    formData.append("email", data.email);
    this._userService.referFriend(formData).then((response: any) => {
      if (response && response.status === 'OK') {
        this.formGroup.reset();
        this._utilityService.successMessage(response.message, response.status);
      }
    })
  }

}
