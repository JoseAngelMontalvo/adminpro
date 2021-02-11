import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICE } from '../../config/config';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UploadFileService } from '../uploadFile/upload-file.service';

@Injectable()
export class UsersService {
  user: User;
  token: string;
  constructor(
    public http: HttpClient,
    public router: Router,
    public _uploadFileService: UploadFileService
  ) {
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
  saveProfile(user: User) {
    const url = `${URL_SERVICE}/user/${user._id}?token=${this.token}`;
    return this.http.put(url, user).pipe(
      map((resp: any) => {
        const userDB = resp.user;
        this.saveLocalStorage(userDB._id, this.token, userDB);
        Swal.fire({
          title: 'Usuario actualizado',
          text: user.name,
          icon: 'success',
        });
        return true;
      })
    );
  }
  upDateImageProfileUser(image: File, id: string) {
    this._uploadFileService
      .uploadFile(image, 'users', id)
      .then((resp: any) => {
        this.user.img = resp.user.img;
        this.saveLocalStorage(id, this.token, this.user);
        Swal.fire({
          title: 'Imagen de Profile actualizada',
          text: this.user.name,
          icon: 'success',
        });
        return true;
      })
      .catch((resp) => {
        console.log(resp);
      });
  }
}
