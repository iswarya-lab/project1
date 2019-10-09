import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }  from  'src/app/dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import{ ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
 { path: '', component: DashboardComponent},
{ path:'cart', component: MyCartComponent},
{ path:'electricals',component:ProductDetailsComponent},
{path: 'clothing',component: ProductDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
