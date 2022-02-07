import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <header>
      <h1>Carl's Web Site</h1>

      <div>
        <span>Hi FULL NAME!</span>

        <a (click)="onLogout()">(Logout)</a>
      </div>
    </header>
  `
})
export class HeaderComponent {
  onLogout(): void { }
}
