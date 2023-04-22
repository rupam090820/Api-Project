import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'food',component:FoodComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
