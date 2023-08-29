import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SignupComponent
  ]
})
export class RegisterModule { }
