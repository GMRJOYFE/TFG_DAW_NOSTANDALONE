import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceComponent {
  private baseUrl = 'http://localhost:4200'; // Ajusta según la URL de tu servidor

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, user);
  }

  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }
}
