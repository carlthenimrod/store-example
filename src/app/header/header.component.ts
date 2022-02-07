import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [`
    :host {
      background-color: #336;
      display: block;
      height: 3.5rem;
      width: 100%;
    }

    header {
      align-items: center;
      color: #fff;
      display: flex;
      height: 100%;
      padding: 0 1rem;
      width: 100%;

      h1 {
        font-size: 1rem;
        margin: 0;
        text-transform: uppercase;
      }

      div {
        align-items: center;
        color: #fff;
        display: flex;
        font-size: 1rem;
        font-weight: 700;
        margin-left: auto;

        a {
          font-size: 0.85rem;
          margin-left: 0.5rem;
        }
      }
    }
  `],
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
