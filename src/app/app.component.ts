import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean;

  constructor(){
    this.visible= false;
  }
  openPop(){
    this.visible= !this.visible;
  }
  closePop(){
    this.visible= false;
  }
}
