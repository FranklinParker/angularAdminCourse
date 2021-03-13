import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecureComponent} from './secure/components/secure/secure.component';
import {LoginComponent} from './public/components/login/login.component';
import {RegisterComponent} from './public/components/register/register.component';

const routes: Routes = [
  { path: '',
    component: SecureComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
