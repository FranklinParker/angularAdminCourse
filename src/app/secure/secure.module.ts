import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './components/secure/secure.component';
import {NavComponent} from './components/nav/nav.component';
import {MenuComponent} from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],

})
export class SecureModule { }
