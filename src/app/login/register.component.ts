import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/service.index';
//import swal from 'sweetalert';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css'],
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;

  constructor(public _userService: UsersService, public router: Router) {}
  compareInputs(input1: string, input2: string) {
    return (group: FormGroup) => {
      let input_1 = group.controls[input1].value;
      let input_2 = group.controls[input2].value;
      if (input_1 === input_2) {
        return null;
      }
      return {
        indenticals: true,
      };
    };
  }
  ngOnInit(): void {
    init_plugins();
    this.forma = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        conditions: new FormControl(false),
      },
      { validators: this.compareInputs('password', 'password2') }
    );
    this.forma.setValue({
      name: 'Test',
      email: 'Test@test.com',
      password: '123456',
      password2: '123456',
      conditions: true,
    });
  }
  userRegister() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.conditions) {
      //swal('Importante', 'Debe aceptar las condiciones', 'warning');
      return;
    }
    const user = new User(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );
    this._userService
      .createUser(user)
      .subscribe((resp) => this.router.navigate(['/login']));
  }
}
