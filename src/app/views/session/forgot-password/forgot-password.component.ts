import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilityService } from '../../../shared/services/utility.service';
import { UserService } from '../../admin/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formGroup: FormGroup;
  sessionUser: any;

  constructor(
    public matDialogRef: MatDialogRef<ForgotPasswordComponent>,
    private _utilityService: UtilityService,
    private _userService: UserService
  ) {
    this.sessionUser = this._utilityService.getSessionUser();
    matDialogRef.disableClose = true;
    //Create Form
    this.formGroup = this._userService.createForgotPasswordForm();
  }

  ngOnInit() {
  }

  /**
   * Submit
   */
  submit() {
    const data = this.formGroup.getRawValue();
    let formData = new FormData();
    formData.append("email", data.email);
    this._userService.forgotPassword(formData).then((response: any) => {
      if (response && response.status === 'OK') {
        this._utilityService.successMessage(response.message, response.status);
        this.matDialogRef.close(true);
      } else {
        this._utilityService.successMessage(response.message, response.status);
      }
    })
  }
}
