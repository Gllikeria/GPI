import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'gpi';
  testArray = [true, false, false];
  testFunction(position: number) {
    this.testArray[0] = false;
    this.testArray[1] = false;
    this.testArray[2] = false;

    this.testArray[position] = true;

  }
}
