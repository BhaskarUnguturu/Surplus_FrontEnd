import { Injectable } from '@angular/core';
import { UtilityService } from '../../../shared/services/utility.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../../shared/services/loading.service';
import { Pagination } from '../../../shared/interfaces/pagination.interface';
import { MustMatch } from '../../../shared/validators/must-match';

@Injectable({
    providedIn: 'root'
})
export class UserService implements Resolve<any>{

    onDataChanged: BehaviorSubject<any>;
    onDataListChanged: BehaviorSubject<Pagination>;
    data: any = null;
    routeParams: any = null;
    state: string = "";

    /**
     * Constructor
     *
     * @param {UtilityService} _utilityService
     * @param {ApiService} _apiService
     */
    constructor(
        public _utilityService: UtilityService,
        private _apiService: ApiService,
        private _formBuilder: FormBuilder,
        private _loadingService: LoadingService,
        private _router: Router
    ) {
        // Set the defaults
        this.onDataChanged = new BehaviorSubject({});
        this.onDataListChanged = new BehaviorSubject<Pagination>(_utilityService.pagination);
    }

    /**
      * Resolver
      *
      * @param {ActivatedRouteSnapshot} route
      * @param {RouterStateSnapshot} state
      * @returns {Observable<any> | Promise<any> | any}
      */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;
        this.state = state.url;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getUserForResolve()
            ]).then(
                () => {
                    resolve(0);
                },
                reject
            );
        });
    }

    getUserForResolve(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.state.includes('add')) {
                this.data = undefined;
                this.onDataChanged.next(false);
                resolve(false);
            }
            else if (this.state.includes('edit') && this.routeParams.id) {
                this.getDataById(this.routeParams.id).then((response: any) => {
                    this.data = response.body.data;
                    this.onDataChanged.next(this.data);
                    resolve(response);
                }, reject);
            }
        });
    }

    /**
     * Create form
     * 
     * @param element 
     */
    createForm(element: any): FormGroup {
        return this._formBuilder.group({
            fullName: [element ? element.fullName : null, [Validators.required]],
            role: [element ? element.role : null, [Validators.required]],
            email: [element ? element.email : null, [Validators.required, Validators.email]],
            mobileNumber: [element ? element.mobileNumber : null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            address: [element ? element.address : null, [Validators.required]],
            dietaryRestrictions: null,
            password: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required]]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        })
    }

    createProfileForm(element: any): FormGroup {
        return this._formBuilder.group({
            fullName: [element ? element.fullName : null, [Validators.required]],
            role: [element ? element.role : null, [Validators.required]],
            email: [element ? element.email : null, [Validators.required, Validators.email]],
            mobileNumber: [element ? element.mobileNumber : null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            address: [element ? element.address : null, [Validators.required]],
            dietaryRestrictions: null
        })
    }

    createReferFriendForm(): FormGroup {
        return this._formBuilder.group({
            email: [null, [Validators.required, Validators.email]]
        })
    }

    /**
     * Change Password Form
     */
    createChangePasswordForm(): FormGroup {
        return this._formBuilder.group({
            oldPassword: [null, [Validators.required]],
            password: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required]]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        })
    }

    /**
     * Change Password Form
     */
    createForgotPasswordForm(): FormGroup {
        return this._formBuilder.group({
            email: [null, [Validators.required, Validators.email]]
        })
    }

    /**
     * Add or save data
     * 
     * @param data 
     * @param type 
     */
    addOrUpdateData(data: any, type: any) {
        this._loadingService.loading.next(true);
        this._apiService.post(type === 'add' ? 'user/add' : 'user/update', data).then((response: any) => {
            if (response && response.status === 'OK') {
                this._loadingService.loading.next(false);
                this._utilityService.successMessage(response.message, response.status);
                if (type === 'add') {
                    this._router.navigateByUrl("/signin");
                }
            } else {
                this._loadingService.loading.next(false);
                this._utilityService.errorMessage(response.message, response.status);
            }
        }, error => {
            this._loadingService.loading.next(false);
            console.log(error);
            if (error.status === 0) {
                this._utilityService.errorMessage('Internal Server Error! Please try again after some time', 'ERROR');
            } else {
                this._utilityService.errorMessage(error.error.message, error.statusText);
            }
        });;
    }

    /**
     * Change password
     * 
     * @param formData 
     * @param userId 
     */
    changePassword(formData: FormData, userId: any) {
        return this._apiService.post(`changePassword`, formData);
    }

    /**
     * Get data list with pagination
     * 
     * @param data 
     */
    getListWithPagination(data: any) {
        return this._apiService.post('user/getUserListWithPagination', data);
    }

    /**
     * Get data list by filter with pagination
     * 
     * @param data 
     */
    getListByFilterWithPagination(data: any) {
        this._loadingService.loading.next(true);
        this._apiService.post('user/pagination/filter', data).then((response: any) => {
            this._loadingService.loading.next(false);
            this.onDataListChanged.next(response);
        }, error => {
            this._loadingService.loading.next(false);
            console.log(error);
            if (error.status === 0) {
                this._utilityService.errorMessage('Internal Server Error! Please try again after some time', 'ERROR');
            } else {
                this._utilityService.errorMessage(error.error.message, error.statusText);
            }
        })
    }

    /**
     * Get data list by filter with pagination
     * 
     * @param data 
     */
    getListByFilter(data: any) {
        this._loadingService.loading.next(true);
        this._apiService.post('user/getListByFilter', data).then((response: any) => {
            this._loadingService.loading.next(false);
            if (response && response.body.status === 'OK') {
            } else {
                this._utilityService.errorMessage(response.body.message, response.body.status);
            }
        }, error => {
            this._loadingService.loading.next(false);
            console.log(error);
            if (error.status === 0) {
                this._utilityService.errorMessage('Internal Server Error! Please try again after some time', 'ERROR');
            } else {
                this._utilityService.errorMessage(error.error.message, error.statusText);
            }
        });;
    }

    /**
     * Change data status
     */
    changeStatus(formData: any, json: any) {
        this._loadingService.loading.next(true);
        this._apiService.post(formData, `user/changeStatus`).then((response: any) => {
            this._loadingService.loading.next(false);
            if (response && response.statusText === 'OK') {
                this.getListByFilterWithPagination(json);
                this._utilityService.successMessage(response.body.message, response.status);
            } else {
                this._utilityService.errorMessage(response.body.message, response.status);
            }
        }, error => {
            this._loadingService.loading.next(false);
            console.log(error);
            if (error.status === 0) {
                this._utilityService.errorMessage('Internal Server Error! Please try again after some time', 'ERROR');
            } else {
                this._utilityService.errorMessage(error.error.message, error.statusText);
            }
        });
    }

    /**
     * Get data list by filter
     * 
     * @param data 
     */
    getUserListByFilter(data: any) {
        return this._apiService.post('user/getUserListByFilter', data);
    }

    /**
     * Check data email exist
     * 
     * @param emailId 
     */
    checkUserExistByEmail(emailId: any) {
        return this._apiService.get(`user/checkUserExistByEmail${emailId}`);
    }

    /**
     * Get All Data
     */
    getAll() {
        return this._apiService.get(`user/getAll`);
    }

    /**
     * Forgot password
     * 
     * @param emailId 
     */
    forgotPassword(data: any) {
        return this._apiService.post(`user/password/forgot`, data);
    }

    /**
     * Get data by id
     * 
     * @param id 
     */
    getDataById(id: any) {
        return this._apiService.get(`user/${id}`);
    }

    /**
     * Get user details by id
     * 
     * @param userId 
     */
    getUserDetailsById(userId: any) {
        return this._apiService.get(`user/getUserDetailsById/${userId}`);
    }

    /**
     * get user list
     */
    getUserList() {
        return this._apiService.get('user/getUserList');
    }

    /**
     * Delete  by id
     * 
     * @param id 
     */
    deleteById(id: string, json: any) {
        this._loadingService.loading.next(true);
        this._apiService.delete(`user/deleteById/${id}`).then((response: any) => {
            this._loadingService.loading.next(false);
            if (response && response.body.status === 'OK') {
                this.getListByFilterWithPagination(json);
                this._utilityService.successMessage(response.body.message, response.body.status);
            } else {
                this._utilityService.errorMessage(response.body.message, response.body.status);
            }
        }, error => {
            this._loadingService.loading.next(false);
            console.log(error);
            if (error.status === 0) {
                this._utilityService.errorMessage('Internal Server Error! Please try again after some time', 'ERROR');
            } else {
                this._utilityService.errorMessage(error.error.message, error.statusText);
            }
        });
    }

    referFriend(formData: FormData) {
        return this._apiService.post(`user/refer`, formData);
    }
}
