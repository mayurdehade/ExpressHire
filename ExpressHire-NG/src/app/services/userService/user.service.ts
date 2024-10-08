import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/api/user/';

  createAccount(name: any, email: any, password: any): Observable<any> {
    return this.http.post(this.baseUrl + 'create', { name, email, password });
  }

  login(email: any, password: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', { email, password });
  }
}
