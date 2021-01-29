import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardsGuard implements CanActivate {
  constructor(public _userService: UsersService, public router: Router) {}
  canActivate() {
    if (this._userService.islogged()) {
      console.log('usuario logado correctamente');
      return true;
    } else {
      console.log('Error: usuario NO logado');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
