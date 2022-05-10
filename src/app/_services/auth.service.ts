import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://jwt.teamkinetic.co.uk/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/authenticate', {
      username,
      password
    }, httpOptions);
  }

 

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      username,
      email,
      password
    }, httpOptions);
  }

   
 
 
}
