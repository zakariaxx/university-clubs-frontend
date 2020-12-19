import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private connectedUser : User = new User();
  private issuer = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    register: 'http://127.0.0.1:8000/api/auth/register'
  };

  constructor() { }

  // tslint:disable-next-line:typedef
  handleData(data){
    localStorage.setItem('auth_token', data.access_token);
    localStorage.setItem('user',  JSON.stringify(data.user));
  }

  // tslint:disable-next-line:typedef
  getToken(){
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  // tslint:disable-next-line:typedef
  isValidToken(){
    const token = this.getToken();

    if (token){
      const payload = this.payload(token);
      if (payload){
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
      }
    } else {
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  payload(token) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return this.isValidToken();
  }

public getUser():User{

  return JSON.parse(localStorage.getItem('user'));

}

  // Remove token
  // tslint:disable-next-line:typedef
  removeToken(){
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');

    this.connectedUser = new User();
  }



}
