import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { appConfig } from '../../../shared/config/app.config';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  title: string = `${appConfig.projectName} | Signin`;
  formGroup!: FormGroup;

  constructor(
    private titleService: Title,
    private _sessionService: SessionService,
    private _matDialog: MatDialog
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.formGroup = this._sessionService.createSigninForm();
  }

  submit() {
    const data = this.formGroup.getRawValue();
    this._sessionService.login(data);
  }

  forgotPassword() {
    let dialogRef = this._matDialog.open(ForgotPasswordComponent, {
      panelClass: 'contact-form-dialig',
      width: '500px'
    });
  }

}
