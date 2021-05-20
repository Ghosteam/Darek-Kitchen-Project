import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BrandsComponent} from './components/brands/brands.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { MenuComponent } from './components/menu/menu.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import {CreateChefComponent } from './components/create-chef/create-chef.component';
import {BrandsAdminComponent } from './components/brands-admin/brands-admin.component'
import { LoggedHomeComponent } from './components/logged-home/logged-home.component';
import { ManagementComponent } from './components/management/management.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddPlateComponent } from './components/add-plate/add-plate.component';
import { PlateComponent } from './components/plate/plate.component';
import { ChefPlatesComponent } from './components/chef-plates/chef-plates.component';
import { CartComponent } from './components/cart/cart.component';
import { GuardGuard } from './guard/guard.guard';
import { AllplatesComponent } from './components/allplates/allplates.component';



const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'brands', component: BrandsComponent, canActivate: [GuardGuard] },
{path:'login',component:UserLoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'userSignup',component:UserSignupComponent},
{ path: 'addBrand', component: AddBrandComponent, canActivate: [GuardGuard] },
{ path: 'dashboard', component: AdminDashboardComponent, canActivate: [GuardGuard] },
{path: 'menu', component: MenuComponent, canActivate: [GuardGuard]},
{path:'getusers', component : GetUserComponent, canActivate: [GuardGuard]},
{path:'getbrands',component: BrandsAdminComponent, canActivate: [GuardGuard] },
{path:'createchef',component: CreateChefComponent , canActivate: [GuardGuard]},
{path:'welcome',component:LoggedHomeComponent, canActivate: [GuardGuard] },
{path:'manage',component: ManagementComponent, canActivate: [GuardGuard]},
{path:'order',component : OrdersComponent, canActivate: [GuardGuard]},
{path:'addplate',component:AddPlateComponent, canActivate: [GuardGuard]},
{path:'plate',component:PlateComponent, canActivate: [GuardGuard]},
{path:'chefplates',component:ChefPlatesComponent, canActivate: [GuardGuard]},
{ path: 'cart', component: CartComponent , canActivate: [GuardGuard]},
{path: 'plates', component:AllplatesComponent, canActivate: [GuardGuard]},
{ path: '', pathMatch: 'full', redirectTo: '/login' },
{ path:'**', redirectTo:'/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
