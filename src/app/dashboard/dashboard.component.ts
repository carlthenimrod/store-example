import { Component, Input } from '@angular/core';

import { User } from '../interfaces/user';

@Component({
  selector: 'app-dashboard',
  styles: [`
    :host {
      display: block;
      padding: 2rem;
    }

    h1 {
      color: #336;
    }

    p {
      color: #333;
    }
  `],
  template: `
    <h1>Welcome {{ user.name.first }}!</h1>

    <p>Dashboard coming soon... (2025)</p>
  `
})
export class DashboardComponent {
  @Input() user!: User;
}
