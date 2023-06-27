import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { FileUploadService } from '../../services/file-upload.service';
import { UtilityService } from '../../services/utility.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Input("file") file: any = {};
  @Input("type") type: any = {};
  @Output() outputFile = new EventEmitter();

  isSubmitButtonDisable: boolean = false;
  progressBarForFile: number = 0;

  constructor(
    private _fileUploadService: FileUploadService,
    public _utilityService: UtilityService,
    private _loadingService: LoadingService
  ) { }

  ngOnInit() {
  }

  /**
 * On select file
 * 
 * @param event 
 */
  onSelectFile(event: any) {
    this._loadingService.loading.next(true);
    if (event.target.files && event.target.files[0]) {
      this.uploadFile(event.target.files[0]);
    } else {
      this.file = "";
    }
    this._loadingService.loading.next(false);
  }

  /**
   * Load image
   */
  loadImage() {
    this._loadingService.loading.next(false);
  }

  /**
   * Remove file
   */
  removeFile() {
    this._loadingService.loading.next(true);
    this._fileUploadService.delete(this.file.originalUrl).then((response: any) => {
      if (response && response.status === 'OK') {
        this.file = "";
        this._loadingService.loading.next(false);
      } else {
        this._loadingService.loading.next(false);
      }
    }, error => {
      this._loadingService.loading.next(false);
    })
  }

  /**
    * Upload File
    * 
    * @param multiPartFile 
    */
  uploadFile(multiPartFile: any) {
    this.isSubmitButtonDisable = true;
    let formData = new FormData();
    formData.append('file', multiPartFile);
    formData.append('type', this.type);
    this._fileUploadService.uploadImage(formData).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progressBarForFile = Math.round(event.loaded / (event && event.total ? event.total * 100 : 0));
          console.log(`Uploaded! ${this.progressBarForFile}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.file = event.body.data;
          setTimeout(() => {
            this.progressBarForFile = 0;
            this.isSubmitButtonDisable = false;
            this.outputFile.emit({ file: this.file, isSubmitButtonDisable: false });
          }, 1500);
      }
    });
  }

}