import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SessionComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    RouterModule
  ]
})
export class SessionModule { }
