import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <header>
      <h1>Carl's Web Site</h1>

      <div *ngIf="user">
        <span>Hi {{ user.name.first }} {{ user.name.last }}!</span>

        <a (click)="onLogout()">(Logout)</a>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  user?: User;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.user$
      .subscribe(user => {
        this.user = user;
        if (!this.user) { return; }
        this.user.name.first = 'Test';

      });
  }

  onLogout(): void {
    this._userService.logout();
  }
}
