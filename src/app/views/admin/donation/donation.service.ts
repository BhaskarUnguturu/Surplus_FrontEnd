import { Injectable } from '@angular/core';
import { UtilityService } from '../../../shared/services/utility.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../../shared/services/loading.service';
import { Pagination } from '../../../shared/interfaces/pagination.interface';

@Injectable({
    providedIn: 'root'
})
export class DonationService implements Resolve<any>{

    onDataChanged: BehaviorSubject<any>;
    onDataListChanged: BehaviorSubject<Pagination>;
    data: any = null;
    routeParams: any = null;
    state: string = "";

    STATUS: any[] = [
        { key: 0, value: 'Pending', color: 'accent' },
        { key: 1, value: 'Inprogress', color: 'warn' },
        { key: 2, value: 'Completed', color: 'primary' }
    ]

    FOOD_TYPES: any[] = [
        { key: 'Fruit and vegetables', value: 'Fruit and vegetables', color: 'primary' },
        { key: 'Starchy food', value: 'Starchy food', color: 'warn' },
        { key: 'Dairy', value: 'Dairy', color: 'warn' },
        { key: 'Protein', value: 'Protein', color: 'warn' },
        { key: 'Fat', value: 'Fat', color: 'warn' }
    ]

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
    createForm(element?: any): FormGroup {
        return this._formBuilder.group({
            dietaryRestrictions: [element ? element.dietaryRestrictions : null, [Validators.required]],
            expirationDate: [element ? element.expirationDate : null, [Validators.required]],
            quantity: [element ? element.quantity : null, [Validators.required]],
            schedulingTimeDate: [element ? element.schedulingTimeDate : null, [Validators.required]],
            typeOfDonation: [element ? element.typeOfDonation : null, [Validators.required]],
            typeOfFood: [element ? element.typeOfFood : null, [Validators.required]],
            venue: [element ? element.venue : null, [Validators.required]]
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
        this._apiService.post(type === 'add' ? 'food/add' : 'food/update', data).then((response: any) => {
            if (response && response.status === 'OK') {
                this._loadingService.loading.next(false);
                this._utilityService.successMessage(response.message, response.status);
                this._router.navigateByUrl("/admin/food");
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

    getStatus(key: any) {
        let element = this.STATUS.find(item => item.key === key);
        if (element) {
            return element.value;
        } else {
            return '';
        }
    }

    getStatusColor(key: any) {
        let element = this.STATUS.find(item => item.key === key);
        if (element) {
            return element.color;
        } else {
            return '';
        }
    }

    /**
     * Get data by id
     * 
     * @param id 
     */
    getDataById(id: any) {
        return this._apiService.get(`food/getById/${id}`);
    }

    /**
     * Delete  by id
     * 
     * @param id 
     */
    deleteById(id: string, json: any) {
        this._loadingService.loading.next(true);
        this._apiService.delete(`food/deleteById/${id}`).then((response: any) => {
            this._loadingService.loading.next(false);
            if (response && response.body.status === 'OK') {
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

    exportData(data: any[]) {
        let dataList: any[] = [];
        data.forEach(element => {
            let json = {
            }
            dataList.push(json);
        });
    }

    getDataListByUserId(id: any) {
        return this._apiService.get(`food/list/${id}`);
    }

    getReport() {
        return this._apiService.get(`user/reporting`);
    }
}
