import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './components/secure/secure.component';
import {NavComponent} from './components/nav/nav.component';
import {MenuComponent} from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { RolesComponent } from './components/roles/roles.component';
import { RoleCreateComponent } from './components/roles/role-create/role-create.component';
import { RoleEditComponent } from './components/roles/role-edit/role-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
    ProfileComponent,
    DashboardComponent,
    UsersComponent,
    PaginatorComponent,
    UserCreateComponent,
    UserEditComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleEditComponent,
    ProductsComponent,
    ProductCreateComponent,
    UploadsComponent,
    ProductEditComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

})
export class SecureModule { }
