import { Component, OnInit } from '@angular/core';
import { SidebarService, UsersService } from '../../services/service.index';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  user: User;
  constructor(
    public _sideBar: SidebarService,
    public _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.user = this._usersService.user;
  }
}
