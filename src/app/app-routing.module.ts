import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './register/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TododashboardComponent } from './todos/tododashboard/tododashboard.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'todo-dashboard', component: TododashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
