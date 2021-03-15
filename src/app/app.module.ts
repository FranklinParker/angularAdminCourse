import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecureModule} from './secure/secure.module';
import {PublicModule} from './public/public.module';
import {CredentialsInterceptor} from './interceptors/Credentials.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
