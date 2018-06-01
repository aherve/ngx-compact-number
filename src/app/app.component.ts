import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public numbers = [
    -1000,
    1,
    12,
    123,
    123.456,
    1234,
    12345,
    123456,
    1234567,
    12345678,
    123456789,
    1234567890,
  ]
}
