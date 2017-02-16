import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ngx-modal";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './directives/error/error.component';
import { HeaderComponent } from './directives/header/header.component';
import { FooterComponent } from './directives/footer/footer.component';
import { ModalComponent } from './directives/modal/modal.component';
import { AppGuardService } from './config/app.guard';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { HomeService } from './services/home.service';
import { ErrorService } from './services/error.service';
import { StorageService } from './services/storage.service';
import { MessageService } from './services/message.service';
import { DateFilter } from './home/home-filter.pipe';
import { AppRouter } from './config/app.route';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    DateFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouter,
    ModalModule
  ],
  providers: [
    AppGuardService,
    LoginService,
    RegisterService,
    HomeService,
    ErrorService,
    StorageService,
    MessageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
