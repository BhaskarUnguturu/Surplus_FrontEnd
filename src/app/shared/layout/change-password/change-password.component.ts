import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../views/admin/user/user.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formGroup: FormGroup;
  sessionUser: any;

  constructor(
    public matDialogRef: MatDialogRef<ChangePasswordComponent>,
    private _utilityService: UtilityService,
    private _userService: UserService
  ) {
    this.sessionUser = this._utilityService.getSessionUser();
    matDialogRef.disableClose = true;
    //Create Form
    this.formGroup = this._userService.createChangePasswordForm();
  }

  ngOnInit() {
  }

  /**
   * Submit
   */
  submit() {
    const data = this.formGroup.getRawValue();
    let formData = new FormData();
    formData.append("oldPassword", data.oldPassword);
    formData.append("newPassword", data.password);
    formData.append("userId", this.sessionUser.id);
    this._userService.changePassword(formData, this.sessionUser.id).then((response: any) => {
      if (response && response.status === 'OK') {
        this._utilityService.successMessage(response.message, response.status);
        this.matDialogRef.close(true);
      } else {
        this._utilityService.successMessage(response.message, response.status);
      }
    })
  }
}
