import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { cloneDeep } from 'lodash-es';

import { users } from '../data/users';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user?: User;
  private _user$ = new ReplaySubject<User|undefined>(1);
  user$ = this._user$.asObservable();

  login(credentials: { email: string, password: string }): void {
    const match = users.find(u =>
      u.email.toLowerCase() === credentials.email.toLowerCase() &&
      u.password.toLowerCase() === credentials.password.toLowerCase()
    );

    this._user = match;
    this._user$.next(cloneDeep(this._user));
  }

  logout(): void {
    delete this._user;

    this._user$.next(this._user);
  }
}
