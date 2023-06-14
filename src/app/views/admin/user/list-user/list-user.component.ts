import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from '../../../../shared/interfaces/pagination.interface';
import { ConstantService } from '../../../../shared/services/constant.service';
import { UtilityService } from '../../../../shared/services/utility.service';
import { UserService } from '../user.service';
import { ViewUserComponent } from '../view-user/view-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'email', 'mobileNumber', 'createdAt', 'role', 'action'];
  dataSource: any;
  pagination: Pagination;
  dialogRef: any;
  sessionUser: any;
  pageNumber: any = 1;
  filterModel: any = {
    role: 0,
    keyword: null
  }

  constructor(
    public _utilityService: UtilityService,
    private _userService: UserService,
    private _matDialog: MatDialog,
    public _constantService: ConstantService
  ) {
    this.pagination = _utilityService.pagination;
    this.sessionUser = this._utilityService.getSessionUser();
    this.getDataList();
  }

  ngOnInit() {
    this._userService.onDataListChanged.subscribe((pagination: Pagination) => {
      this.pagination = pagination.data;
      this.dataSource = new MatTableDataSource(this.pagination.data);
    })
  }

  /**
  * Get next page data
  * 
  * @param page 
  */
  getNextPageData(page: any) {
    this.pageNumber = page.pageIndex + 1;
    this.pagination.currentPage = page.pageIndex + 1;
    this.getDataList();
  }

  /**
   * Get Data List with pagination
   */
  getDataList() {
    let json = {
      filter: this.filterModel,
      pagination: this.pagination
    }
    this._userService.getListByFilterWithPagination(json);
  }

  /**
   * Change status
   * 
   * @param userStatus 
   */
  changeStatus(status: any, id: string) {
    let result = confirm("Are you sure you want to Change Status?");
    if (result == true) {
      let json = {
        id: id,
        status: status
      }
      let filter = {
        filter: this.filterModel,
        pagination: this.pagination
      }
      this._userService.changeStatus(json, filter);
    }
  }

  /**
   * Delete by id
   * 
   * @param id 
   */
  deleteById(id: any) {
    let result = confirm("Are you sure you want to delete?");
    if (result == true) {
      let filter = {
        filter: this.filterModel,
        pagination: this.pagination
      }
      this._userService.deleteById(id, filter);
    }
  }

  /**
   * View data
   * 
   * @param element 
   */
  detail(element: any) {
    this.dialogRef = this._matDialog.open(ViewUserComponent, {
      panelClass: 'contact-form-dialig',
      width: '800px',
      maxWidth: '100%',
      data: element
    });
  }

  /**
   * Export
   */
  export() {
    this._userService.getListByFilter(this.filterModel);
  }

}