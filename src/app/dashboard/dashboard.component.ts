import { Component } from '@angular/core';

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
    <h1>Welcome FIRST NAME!</h1>

    <p>Dashboard coming soon... (2025)</p>
  `
})
export class DashboardComponent { }
