import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AppGuardService } from './app.guard';


const appRoutes: Routes=[
    {path: '', component: HomeComponent, canActivate: [AppGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: RegisterComponent},
    {path: '*', redirectTo: ''}
]

export const AppRouter = RouterModule.forRoot(appRoutes);

