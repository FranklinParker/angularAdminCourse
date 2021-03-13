import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './components/public/public.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PublicComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PublicModule { }
