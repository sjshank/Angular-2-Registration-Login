import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AppGuardService } from './app.guard';


const appRoutes: Routes=[
    {path: 'home', component: HomeComponent, canActivate: [AppGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: RegisterComponent},
    {path: 'logout', component: LoginComponent},
    {path: '**', redirectTo: 'home'}
]

export const AppRouter = RouterModule.forRoot(appRoutes);

