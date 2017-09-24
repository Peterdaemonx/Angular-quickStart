import {Component} from '@angular/core';

@Component({
  selector: 'rigth-component-content',
  template: `
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
     <p class="text_box">
       <app-rest-component></app-rest-component>
     </p>
  </div>
  `,
  styleUrls: [
    './rigth.component.css'
  ]
})

export  class RigthComponentContent {
}
