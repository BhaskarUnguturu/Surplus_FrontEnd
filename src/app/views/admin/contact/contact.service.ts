import { Injectable } from '@angular/core';
import { UtilityService } from '../../../shared/services/utility.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../../shared/services/loading.service';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

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
    }

    /**
     * Create form
     * 
     * @param element 
     */
    createForm(element?: any): FormGroup {
        return this._formBuilder.group({
            name: [element ? element.name : null, [Validators.required]],
            email: [element ? element.email : null, [Validators.required]],
            mobileNumber: [element ? element.mobileNumber : null, [Validators.required]],
            message: [element ? element.message : null, [Validators.required]]
        })
    }

    /**
     * Add or save data
     * 
     * @param data 
     * @param type 
     */
    addOrUpdateData(data: any, formGroup: FormGroup) {
        this._loadingService.loading.next(true);
        this._apiService.post('contact/add', data).then((response: any) => {
            if (response && response.status === 'OK') {
                this._loadingService.loading.next(false);
                this._utilityService.successMessage(response.message, response.status);
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
        });
    }

    getDataList() {
        return this._apiService.get(`contact/get/all`);
    }
}
