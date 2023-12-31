import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferFriendComponent } from './refer-friend.component';

const routes: Routes = [{ path: '', component: ReferFriendComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferFriendRoutingModule { }
