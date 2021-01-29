import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICE } from '../../config/config';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
  user: User;
  token: string;
  constructor(public http: HttpClient, public router: Router) {
    this.getStorage();
    console.log('servicio de User listo');
  }
  islogged() {
    return this.token.length > 5 ? true : false;
  }
  logOut() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  saveLocalStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }
  getStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }
  createUser(user: User) {
    const url = `${URL_SERVICE}/user`;
    return this.http.post(url, user);
  }
  loginGoogle(token: string) {
    const url = `${URL_SERVICE}/login/google`;
    return this.http.post(url, { token: token }).pipe(
      map((resp: any) => {
        this.saveLocalStorage(resp.id, resp.token, resp.user);
        return true;
      })
    );
  }
  login(user: User, remember: boolean = false) {
    if (remember == true) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = `${URL_SERVICE}/login`;
    return this.http.post(url, user).pipe(
      map((resp: any) => {
        this.saveLocalStorage(resp.id, resp.token, resp.user);
        return true;
      })
    );
  }
}
