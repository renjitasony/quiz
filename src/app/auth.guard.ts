import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return this.checkLogin(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      return this.isAdmin(state.url);
    }
  checkLogin(url:string){
    if(this.authService.isLoggedIn()){
      return true;
    }
    this.router.navigate(['/'])
  }
  isAdmin(url:string){
    if(url != '/home/questionnaire'){
      return true;
    }
    if(localStorage.getItem("isAdmin") == "admin"){
      return true;
    }
    this.router.navigate(['/']);
  }
}
