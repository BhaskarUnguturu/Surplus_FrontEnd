import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { ListFoodComponent } from './list-food/list-food.component';

const routes: Routes = [
  { path: '', component: ListFoodComponent },
  { path: 'add', component: AddFoodComponent },
  { path: 'edit/:id', component: AddFoodComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
