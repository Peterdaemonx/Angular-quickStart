import {Component} from '@angular/core';

@Component({
  selector: 'left-component-navigation',
  template: `
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
    <div class="text_box">
      <h4> {{ title }} </h4>
      <a *ngFor="let ittem of ittems" class="list-group-item" href="#">{{ ittem }}</a>
    </div>
  </div>
  `,
  styleUrls: [
    './left.component.css'
  ]
})

export  class LeftComponentNavigation {
  title: string = 'Menu';
  ittems: Array<string> = ['Bienvenidos', 'Welcome', 'Willkommen'];
}
