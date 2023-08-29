import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }

  submitData(email: string, password: string): Observable<any> {
    return this.http.post('https://sea-lion-app-77lg6.ondigitalocean.app/api/auth/signin',
      { email, password },
      { observe: 'response' }
    )
  }
}
