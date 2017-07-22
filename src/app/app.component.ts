import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public min = 25;
  public max = 75;

  public lowerLimit = 0;
  public upperLimit = 100;


}
