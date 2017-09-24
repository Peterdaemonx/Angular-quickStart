import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <div class="row">
        <left-component-navigation></left-component-navigation>
        <rigth-component-content></rigth-component-content>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent  { name = 'Angular'; }
