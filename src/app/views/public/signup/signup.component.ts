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

  submit() {
    const data = this.formGroup.getRawValue();
    this._userService.addOrUpdateData(data, 'add');
  }

}
