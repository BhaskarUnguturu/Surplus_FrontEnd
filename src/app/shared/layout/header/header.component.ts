import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../../../views/session/session.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dialogRef: any;
  sessionUser: any;

  constructor(
    private _sessionService: SessionService,
    private _matDialog: MatDialog
  ) {
    this.sessionUser = _sessionService.getSessionUser();
  }

  ngOnInit() {
  }

  /**
   * Logout
   */
  logout() {
    this._sessionService.logout();
  }

  /**
   * Change password
   */
  changePassword(): void {
    this.dialogRef = this._matDialog.open(ChangePasswordComponent, {
      panelClass: 'contact-form-dialig',
      width: '500px'
    });
  }

  viewProfile() {
    let dialogRef = this._matDialog.open(ProfileComponent, {
      panelClass: 'contact-form-dialig',
      width: '500px'
    });
  }
}
