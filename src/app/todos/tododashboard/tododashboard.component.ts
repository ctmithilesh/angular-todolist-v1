import { Component, OnInit } from '@angular/core';
import { GetTodosService } from 'src/app/Services/get-todos.service';

@Component({
  selector: 'app-tododashboard',
  templateUrl: './tododashboard.component.html',
  styleUrls: ['./tododashboard.component.css']
})
export class TododashboardComponent implements OnInit {

  todos: any;
  constructor(private getTodos: GetTodosService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getTodos.fetchTodos().subscribe(data => {
      console.log(data)
      this.todos = data

    })


  }

}
