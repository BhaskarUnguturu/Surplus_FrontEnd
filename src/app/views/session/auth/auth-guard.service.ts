import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public loginService: SessionService, public router: Router) { }

  canActivate(): boolean {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigateByUrl('/signin');
      return false;
    }
    return true;
  }
}