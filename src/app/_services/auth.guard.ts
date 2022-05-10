import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public tokenStorageService: TokenStorageService,
              public router: Router) { } 

    canActivate(next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.tokenStorageService.isAuthenticated !== true) {
          window.alert("Access not allowed!");
          this.router.navigate(['login'])
        }
        return true;
      }
  

}
