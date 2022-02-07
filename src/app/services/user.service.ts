import { Injectable } from '@angular/core';

import { users } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(credentials: { email: string, password: string }): void {
    const match = users.find(u =>
      u.email.toLowerCase() === credentials.email.toLowerCase() &&
      u.password.toLowerCase() === credentials.password.toLowerCase()
    );

    console.log(match);
  }

  logout(): void {

  }
}
