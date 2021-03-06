import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/service.index';
import { User } from '../models/user.model';
declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  remember: boolean = false;
  email: string;
  auth2: any;

  constructor(public router: Router, public _userService: UsersService) {}

  ngOnInit(): void {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.remember = true;
    }
  }
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '250538118340-5qid2icugr5tl51jgpdtg9ekc26dpkc5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }
  //Funcion logar con google button
  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      //const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      console.log(token);
      this._userService.loginGoogle(token).subscribe(() => {
        window.location.href = '#/dashboard';
        //this.router.navigate(['/dashboard']);
      });
    });
  }
  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let user = new User(null, form.value.email, form.value.password);

    this._userService.login(user, form.value.remember).subscribe((resp) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
