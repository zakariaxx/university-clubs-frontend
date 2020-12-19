import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatalogueService } from './catalogue.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variables
  user: User;
  /**
   * Constructor
   * @param http The http client object
   */
  constructor(private catService: CatalogueService, private tokenService: TokenService) { }
  /**
   * Get an access token
   * @param e The email address
   * @param p The password string
   */
  register(user: User): Observable<any> {
    return this.catService.postResource('auth/signup', user);
  }
  signin(user: User): Observable<any> {
    return this.catService.postResource('auth/login', user);
  }
  profileUser(): Observable<any> {
    return this.catService.getResource('auth/user-profile');
  }
  profilUpdate(UserProfile: User): Observable<any> {
    return this.catService.updateResource('auth/profilUpdate/' + UserProfile.id, UserProfile);
  }
  // tslint:disable-next-line:typedef
  sendResetPasswordLink(data) {
    return this.catService.postResource('reset-password-request', data);
  }
  // tslint:disable-next-line:typedef
  resetPassword(data) {
    return this.catService.postResource('change-password', data);
  }

  public userIsLoggedIn() {
    if (this.tokenService.getToken() != null) {
      return true;
    } else {
      return false;
    }
  }

  public getUser(){
    return this.tokenService.getUser();
  }

  public logout() {
    this.tokenService.removeToken();
  }

  public responseHandler(data){
    this.tokenService.handleData(data);
  }

}
