import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { UtilityService } from '../../shared/services/utility.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    isLoginSubject = new BehaviorSubject<boolean>(SessionService.hasToken());
    isLoggedIn: Observable<any> = new BehaviorSubject<boolean>(false);

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _apiService: ApiService,
        private _navigationService: NavigationService,
        private _utilityService: UtilityService,
        public _jwtHelper: JwtHelperService
    ) { }

    /**
     * Craete Login Form
     */
    createSigninForm(): FormGroup {
        return this._formBuilder.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    /**
     * Login User
     * 
     * @param data 
     */
    login(data: any) {
        this._apiService.post('auth/login', data).then((response: any) => {
            if (response && response.status === 'OK') {
                localStorage.setItem('fwmUserToken', response.data.token);
                let user = {
                    id: response.data.user_details.id,
                    email: response.data.user_details.email,
                    name: response.data.user_details.fullName,
                    role: response.data.user_details.role
                };
                localStorage.setItem('fwmUser', JSON.stringify(user));
                this.isLoginSubject.next(true);
                this._navigationService.setNavigation();
                this._router.navigate(['/admin/dashboard']);
            } else {
                this._utilityService.errorMessage(response.message, response.status);
            }
        }, error => {
            if (error.status !== 0)
                this._utilityService.errorMessage(error.error.message, error.statusText);
            else
                this._utilityService.errorMessage("Server Error", "Try Again");
        })

        // localStorage.setItem('cmsUserToken', "dfdfdfdfdf");
        // let user = {
        //     id: 1,
        //     email: "user@gmail.com",
        //     name: "User",
        //     role: 0
        // };
        // localStorage.setItem('stdUser', JSON.stringify(user));
        // this.isLoginSubject.next(true);
        // this._navigationService.setNavigation();
        // this._router.navigate(['/admin/dashboard']);
    }

    /**
     * Method For has token
     */
    private static hasToken(): boolean {
        return !!localStorage.getItem('fwmUserToken');
    }

    /**
     * Log out the user then tell all the subscribers about the new status
     */
    logout(): void {
        localStorage.removeItem('fwmUserToken');
        localStorage.removeItem('fwmUser');
        this.isLoginSubject.next(false);
        this._router.navigateByUrl("/signin");
    }

    /**
     * Is Authenticated
     */
    public isAuthenticated(): boolean {
        const token: any = localStorage.getItem('fwmUserToken');
        //Check whether the token is expired and return
        //true or false
        return !this._jwtHelper.isTokenExpired(token);
    }

    /**
     * Get session user
     */
    getSessionUser(): any {
        let user = localStorage.getItem("fwmUser");
        return user ? JSON.parse(user) : null;
    }

}
