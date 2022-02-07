import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
    <form #loginForm="ngForm" (ngSubmit)="loginForm.valid && onSubmit(loginForm.value)">
      <header>
        <h1>Login</h1>
      </header>

      <div class="form-control">
        <label for="email">Email:</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email..."
          ngModel
          required
        >
      </div>

      <div class="form-control">
        <label for="password">Password:</label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password..."
          ngModel
          required
        >
      </div>


        <div class="buttons">
          <button [disabled]="!loginForm.valid">Submit</button>
        </div>
    </form>
  `
})
export class LoginComponent {
  constructor(private _userService: UserService) { }

  onSubmit(credentials: { email: string, password: string }): void {
    this._userService.login(credentials);
  }
}
