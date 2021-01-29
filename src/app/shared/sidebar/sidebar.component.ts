import { Component, OnInit } from '@angular/core';
import { SidebarService, UsersService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor(
    public _sideBar: SidebarService,
    public _usersService: UsersService
  ) {}

  ngOnInit(): void {}
}
