import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferFriendRoutingModule } from './refer-friend-routing.module';
import { ReferFriendComponent } from './refer-friend.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ReferFriendComponent
  ],
  imports: [
    CommonModule,
    ReferFriendRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class ReferFriendModule { }
