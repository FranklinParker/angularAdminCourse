import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecureComponent} from './secure/components/secure/secure.component';
import {LoginComponent} from './public/components/login/login.component';
import {RegisterComponent} from './public/components/register/register.component';
import {PublicComponent} from './public/components/public/public.component';
import {ProfileComponent} from './secure/components/profile/profile.component';
import {DashboardComponent} from './secure/components/dashboard/dashboard.component';
import {UsersComponent} from './secure/components/users/users.component';
import {UserCreateComponent} from './secure/components/users/user-create/user-create.component';
import {UserEditComponent} from './secure/components/users/user-edit/user-edit.component';
import {RoleService} from './services/role.service';
import {RolesComponent} from './secure/components/roles/roles.component';
import {RoleCreateComponent} from './secure/components/roles/role-create/role-create.component';
import {RoleEditComponent} from './secure/components/roles/role-edit/role-edit.component';
import {ProductsComponent} from './secure/components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users/:id/edit',
        component: UserEditComponent
      },
      {
        path: 'users/create',
        component: UserCreateComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'roles/create',
        component: RoleCreateComponent
      },
      {
        path: 'roles/:id/edit',
        component: RoleEditComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
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
