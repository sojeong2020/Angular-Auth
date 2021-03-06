import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  get isAuthenticated(): boolean {
    let authToken = this.getToken()
    return authToken !== null ? true: false;
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
  
  public saveToken(token: string): void {
   window.sessionStorage.removeItem(TOKEN_KEY);
   window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
     let gettoken = window.sessionStorage.getItem(TOKEN_KEY);
     console.log(gettoken,"<<<<<gettoken")
     return gettoken
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log(user,"user!!")
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
