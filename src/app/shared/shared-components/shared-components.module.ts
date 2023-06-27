import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NoDataComponent } from './no-data/no-data.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { ShowImageComponent } from './show-image/show-image.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    LoadingComponent,
    NoDataComponent,
    ShowImageComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LoadingComponent,
    NoDataComponent,
    ShowImageComponent,
    UploadImageComponent,
    CommonModule
  ],
  entryComponents: [
  ]
})
export class SharedComponentsModule { }
