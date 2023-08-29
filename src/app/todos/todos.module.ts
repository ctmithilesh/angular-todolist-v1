import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TododashboardComponent } from './tododashboard/tododashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    AddtodoComponent,
    TododashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MenuModule
  ],
  exports: [
    AddtodoComponent,
    TododashboardComponent
  ]
})
export class TodosModule { }
