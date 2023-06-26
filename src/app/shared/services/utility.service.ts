import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment.prod';
import { ConstantService } from './constant.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pagination } from '../interfaces/pagination.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    apiUrl: string = environment.apiUrl;
    pagination: Pagination = { totalPages: 0, totalCount: 0, currentPage: 1, perPage: 25, data: [] };
    defaultUrlImage: string = '/assets/images/dummy/user.jpg';
    defaultUrlLogo: string = '/assets/images//dummy/logo.png';

    constructor(
        private _constantService: ConstantService,
        private _matSnackBar: MatSnackBar
    ) { }

    /**
     * Validate Email
     * 
     * @param email 
     * 
     * @returns {Boolean}
     */
    validateEmail(email: string): boolean {
        var x = email;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2
            || dotposition + 2 >= x.length) {
            // this.openMatSnackBar('Please enter a valid e-mail address ', 'Try Again');
            return false;
        } else {
            return true;
        }
    }

    /**
     * Get Formated Date Time
     * 
     * @param date 
     * 
     * @returns formated date
     */
    getFormatedDateTime(date: any): any {
        return date ? formatDate(date, 'MMM d, yyyy, HH:mm', 'en-US', '+0530') : '';
    }

    /**
     * Get Formated Date
     * 
     * @param date
     * 
     * @returns formated date 
     */
    getFormatedDate(date: any): string {
        return date ? formatDate(date, 'MMM d,yyyy', 'en-US', '+0530') : '';
    }

    /**
     * Get Download File Url
     * 
     * @param file 
     * 
     * @returns file url
     */
    getDownloadFileUrl(file: any): string {
        let url = this.apiUrl + 'file/downloadFile/';
        if (file && file !== '') {
            url += file;
        }
        return url;
    }

    /**
     * Get File Url
     * 
     * @param file 
     * @param type 
     */
    getFileUrl(file: any, type?: any): any {
        let url = this.apiUrl + 'file/get/';
        if (file && file !== '') {
            url += file;
        } else if (type && type === 'user') {
            url = this.defaultUrlImage;
        } else if (type && type === 'logo') {
            url = this.defaultUrlLogo;
        } else {
            url = this.defaultUrlImage;
        }
        return url;
    }

    /**
     * Get File Url
     * 
     * @param file 
     * @param type 
     */
    getImageUrl(file: any, type?: any): any {
        let url = this.apiUrl + 'file/image/';
        if (file && file !== '') {
            url += file;
        } else if (type && type === 'user') {
            url = this.defaultUrlImage;
        } else if (type && type === 'logo') {
            url = this.defaultUrlLogo;
        } else {
            url = this.defaultUrlImage;
        }
        return url;
    }

    /**
     * Get File Url
     * 
     * @param file 
     * @param type 
     */
    getErrorImage(type?: any): any {
        let url = "";
        if (type && type === 'user') {
            url = this.defaultUrlImage;
        } else if (type && type === 'logo') {
            url = this.defaultUrlLogo;
        } else {
            url = this.defaultUrlImage;
        }
        return url;
    }

    /**
     * Success toastr
     * 
     * @param message 
     * @param status 
     */
    successMessage(message: string, status: any) {
        this._matSnackBar.open(message, status, {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
        });
    }

    /**
    * Error toastr
    * 
    * @param message 
    * @param status 
    */
    errorMessage(message: string, status: any) {
        this._matSnackBar.open(message, status, {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
        });
    }

    /**
     * Get User Role
     * 
     * @param role 
     */
    getUserRole(role: any) {
        let element = this._constantService.USER_ROLES.find(item => item.key === role);
        if (element) {
            return element.value;
        } else {
            return 'User';
        }
    }

    /**
     * Get Color
     * 
     * @param key 
     */
    getColor(key: any) {
        let element = this._constantService.COLORS.find(item => item.key === key);
        if (element) {
            return element.value;
        } else {
            return 'primary';
        }
    }

    getStatus(key: any) {
        let element = this._constantService.USER_STATUS.find(item => item.key === key);
        if (element) {
            return element.value;
        } else {
            return 'Inactive';
        }
    }

    /**
     * Get session user
     */
    getSessionUser(): any {
        let user = localStorage.getItem("fwmUser");
        return user ? JSON.parse(user) : null;
    }
}