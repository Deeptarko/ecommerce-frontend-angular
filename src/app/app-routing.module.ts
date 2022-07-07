import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersPageComponent } from './components/admin-orders-page/admin-orders-page.component';
import { AdminProductPageComponent } from './components/admin-product-page/admin-product-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,

    // canActivate: [AuthGuard],
  },
  {
    path: 'home/order',
    component: OrderComponent,

    // canActivate: [AuthGuard],
  },
  {
    path: 'home/:category',
    component: HomeComponent,

    // canActivate: [AuthGuard],
  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] },
  },
  {
    path:'admin-product',
    component:AdminProductPageComponent,
  },
  {
    path:'admin-orders',
    component:AdminOrdersPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
