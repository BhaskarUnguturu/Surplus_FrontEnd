import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstantService } from '../../../shared/services/constant.service';
import { UserService } from '../../admin/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public _constantService: ConstantService,
    private _userService: UserService
  ) {
    this.formGroup = _userService.createForm(null);
  }

  ngOnInit() {
  }

  onSelectionChangeRole(role: any) {
    this.formGroup.controls['dietaryRestrictions'].setValue(null);
    if (role === 5 || role === 6) {
      let element = document.getElementById("res-id") as HTMLElement | null
      if (element)
        element.style.display = "block";
    } else {
      let element = document.getElementById("res-id") as HTMLElement | null
      if (element)
        element.style.display = "none";
    }
  }

  submit() {
    const data = this.formGroup.getRawValue();
    this._userService.addOrUpdateData(data, 'add');
  }

}
