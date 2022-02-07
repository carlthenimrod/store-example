import { Component, OnInit } from '@angular/core';

import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <app-login *ngIf="!user"></app-login>

    <app-dashboard *ngIf="user" [user]="user"></app-dashboard>
  `
})
export class AppComponent implements OnInit {
  user?: User;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.user$
      .subscribe(user => this.user = user);
  }
}
