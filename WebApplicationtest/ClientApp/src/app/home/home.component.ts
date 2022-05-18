import {Component, OnInit} from '@angular/core';
import {GlobalComponent} from "../global-component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Controller Parent';
  testData: string = '';
  testDataJavascript: string = '';
  messageForChild: string = '';

  constructor() {
  }

  ngOnInit() {
    this.testData = GlobalComponent.testData;
    this.testDataJavascript = GlobalComponent.helloFromJavascript();
  }

  sayGoodByeChild() {
    this.testDataJavascript = 'Say good bye child';
    this.messageForChild = this.testDataJavascript;
  }
}
