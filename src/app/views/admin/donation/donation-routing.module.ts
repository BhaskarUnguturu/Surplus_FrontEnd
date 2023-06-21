import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { ListDonationComponent } from './list-donation/list-donation.component';

const routes: Routes = [
  { path: '', component: ListDonationComponent },
  { path: 'add', component: AddDonationComponent },
  { path: 'edit/:id', component: AddDonationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
