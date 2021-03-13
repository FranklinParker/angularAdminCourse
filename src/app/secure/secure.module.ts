import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './components/secure/secure.component';
import {NavComponent} from './components/nav/nav.component';
import {MenuComponent} from './components/menu/menu.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent
  ],
  imports: [
    CommonModule
  ],

})
export class SecureModule { }
