import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './directives/error/error.component';
import { HeaderComponent } from './directives/header/header.component';
import { AppGuardService } from './config/app.guard';
import { AppRouter } from './config/app.route';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [AppGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
