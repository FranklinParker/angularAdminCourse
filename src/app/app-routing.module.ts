import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecureComponent} from './secure/components/secure/secure.component';
import {LoginComponent} from './public/components/login/login.component';
import {RegisterComponent} from './public/components/register/register.component';
import {PublicComponent} from './public/components/public/public.component';
import {ProfileComponent} from './secure/components/profile/profile.component';
import {DashboardComponent} from './secure/components/dashboard/dashboard.component';
import {UsersComponent} from './secure/components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
