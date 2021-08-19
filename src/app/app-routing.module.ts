import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaDashboardComponent } from './pizza-dashboard/pizza-dashboard.component';
import { PizzaDescriptionComponent } from './pizza-dashboard-description/pizza-dashboard-description.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'pizza-dashboard', component: PizzaDashboardComponent },
  { path: 'detail/:id', component: PizzaDescriptionComponent},
  { path: 'signUp', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
