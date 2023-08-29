import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<any> {

    return this.http.get('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/find/all')

  }
}
