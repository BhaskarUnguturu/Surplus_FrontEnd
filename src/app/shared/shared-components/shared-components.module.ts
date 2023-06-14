import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NoDataComponent } from './no-data/no-data.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    LoadingComponent,
    NoDataComponent,
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
    CommonModule
  ],
  entryComponents: [
  ]
})
export class SharedComponentsModule { }
