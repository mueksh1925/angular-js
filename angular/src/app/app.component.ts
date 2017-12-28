import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fullName="Mukesh Kumar Singh"
  name = 'Angular 5';
  employeeUpdate(res)
  {
    this.fullName=res;
  }
}
