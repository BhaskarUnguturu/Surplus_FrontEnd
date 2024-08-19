import { Injectable } from '@angular/core';
//import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
    providedIn: 'root'
})
export class ExcelService {

    constructor() { }

    /**
     * Export To Excel by data
     * 
     * @param excelData 
     * @param excelFileName 
     */
    exportToExcel(excelData: any, excelFileName: any) {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excelData);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.exportWithBuffer(excelBuffer, excelFileName);
    }

    /**
     * Export with buffer
     * 
     * @param buffer 
     * @param fileName 
     */
    private exportWithBuffer(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        //FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + EXCEL_EXTENSION);
    }
}