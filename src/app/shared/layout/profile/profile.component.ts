import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../views/admin/user/user.service';
import { ConstantService } from '../../services/constant.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formGroup!: FormGroup;
  sessionUser: any;
  dataResponse: any;

  constructor(
    public matDialogRef: MatDialogRef<ProfileComponent>,
    public _utilityService: UtilityService,
    private _userService: UserService,
    public _constantService: ConstantService
  ) {
    this.formGroup = _userService.createProfileForm(null);
    this.sessionUser = this._utilityService.getSessionUser();
    matDialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this._userService.getDataById(this.sessionUser.id).then((response: any) => {
      this.dataResponse = response.data;
      this.onSelectionChangeRole(this.dataResponse.role);
      this.formGroup = this._userService.createProfileForm(this.dataResponse);
    })
  }

  onSelectionChangeRole(role: any) {
    if (role === 5 || role === 6) {
      let element = document.getElementById("res-id-edit") as HTMLElement | null
      if (element)
        element.style.display = "block";
    } else {
      let element = document.getElementById("res-id-edit") as HTMLElement | null
      if (element)
        element.style.display = "none";
    }
  }

  async submit() {
    const data = this.formGroup.getRawValue();
    data['id'] = this.dataResponse.id;
    await this._userService.addOrUpdateData(data, 'edit');
    this.matDialogRef.close();
  }
}
