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
    UserEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

})
export class SecureModule { }
