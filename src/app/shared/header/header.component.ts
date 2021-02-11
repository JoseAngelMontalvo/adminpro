import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/service.index';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(public _usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this._usersService.user;
  }
}
