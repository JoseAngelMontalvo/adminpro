import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor(public _usersService: UsersService) {}

  ngOnInit(): void {}
}
