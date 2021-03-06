import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FetchusersComponent } from './fetchusers/fetchusers.component';
import { FetchuserComponent } from './fetchuser/fetchuser.component';

import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  { path: 'fetchusers/:id', component: FetchuserComponent, canActivate: [AuthGuard] },
  { path: 'fetchusers', component: FetchusersComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }