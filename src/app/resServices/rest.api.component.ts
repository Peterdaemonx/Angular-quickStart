import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-rest-component',
  template: `
  <div class="has-success">
     <ng-container *ngFor="let ittem of jsonResult">
     <h6> Name: {{ ittem.name }} Status: {{ ittem.status }} Description: {{ ittem.description }} </h6>
     </ng-container>
  </div>
  `,
  styleUrls: ['./res.api.component.css']
})

export class RestApiComponent {
  data: any = null;
  jsonResult = [
          {
              name: 'Fender',
              status: 'Fender Squier Vibe 60',
              description: 400
          },
          {
              name: 'Ibanez',
              status: 'Ibanez 350 EX',
              description: 450
          },
          {
              name: 'Schecter',
              status: 'Schecter Omen Extreme 6',
              description: 500
          },
      ];

  constructor(private _http: Http) {
    this.getAppStatus();
  }

  private getAppStatus() {
    return this._http.get('http://172.21.229.21:9090/Checkinservices/v1/admin/status')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }
}
