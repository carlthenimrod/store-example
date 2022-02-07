import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <app-login></app-login>

    <app-dashboard></app-dashboard>
  `
})
export class AppComponent {
  title = "Carl's Web Site";
}
