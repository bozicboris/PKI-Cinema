import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';

import {ProjectionsComponent} from './projections/projections.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'projections', component: ProjectionsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},


];
