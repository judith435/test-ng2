import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appi mapi';
  myName = "gunibush";

  buttonClick() {
    let greeting = "";
    greeting = 'hello ';
    greeting += this.myName + " -> the time is: " + Date();
    this.myName = greeting;
  }
}
 
