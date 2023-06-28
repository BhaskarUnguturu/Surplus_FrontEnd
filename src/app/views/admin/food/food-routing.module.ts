import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFoodComponent } from './list-food/list-food.component';

const routes: Routes = [
  { path: '', component: ListFoodComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
