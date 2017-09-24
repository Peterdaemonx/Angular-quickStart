import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hola Mundo {{name}}</h1>
    <app-header></app-header>
    <app-footer></app-footer>
  `,
})
export class AppComponent  { name = 'Angular'; }
