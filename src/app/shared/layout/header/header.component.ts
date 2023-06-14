import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../../../views/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dialogRef: any;
  sessionUser: any;

  constructor(
    private _sessionService: SessionService
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
  }
}
