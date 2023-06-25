import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'food', loadChildren: () => import('./food/food.module').then(m => m.FoodModule) },
  { path: 'donation', loadChildren: () => import('./donation/donation.module').then(m => m.DonationModule) },
  { path: 'refer-friend', loadChildren: () => import('./refer-friend/refer-friend.module').then(m => m.ReferFriendModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
