import { Injectable } from '@angular/core';
import { UtilityService } from '../../../shared/services/utility.service';
import { ApiService } from '../../../shared/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingService } from '../../../shared/services/loading.service';
import { ExcelService } from '../../../shared/services/excel.service';

@Injectable({
    providedIn: 'root'
})
export class FoodService {
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
        private excelService: ExcelService
    ) {
    }

    /**
    * Create form
    * 
    * @param element 
    */
    createRatingFeedbackForm(element?: any): FormGroup {
        return this._formBuilder.group({
            rating: [element ? element.rating : null],
            feedback: [element ? element.feedback : null]
        })
    }

    /**
     * Get data by id
     * 
     * @param id 
     */
    getDataById(id: any) {
        return this._apiService.get(`food/getById/${id}`);
    }

    getDashboardData() {
        return this._apiService.get(`dashboard`);
    }

    exportData(data: any[]) {
        let dataList: any[] = [];
        data.forEach(element => {
            let json = element;
            dataList.push(json);
        });
        this.excelService.exportToExcel(dataList, "Foods");
    }

    getDataList() {
        return this._apiService.get(`food/list`);
    }

    addRating(data: any) {
        this._loadingService.loading.next(true);
        this._apiService.post('rating/add', data).then((response: any) => {
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

    addFeedback(data: any) {
        this._loadingService.loading.next(true);
        this._apiService.post('feedback/add', data).then((response: any) => {
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

    getRating(id: any) {
        return this._apiService.get(`user/${id}/ratings`);
    }

    getFeedback(id: any) {
        return this._apiService.get(`user/${id}/feedback`);
    }

    getReport() {
        return this._apiService.get(`user/reporting`);
    }

    accept(id: any) {
        return this._apiService.put(`food/accept?id=${id}`, null);
    }

    reject(id: any) {
        return this._apiService.put(`food/reject?id=${id}`, null);
    }
}
