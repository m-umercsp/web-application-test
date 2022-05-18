import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() messageFromParent: string = '';
  childTitle: string = 'Child I am inside parent';
  myList: { id: number, name: string }[] = [];
  myDummyList = [
    {id: 1, name: 'Bobby'},
    {id: 22, name: 'Peter'},
    {id: 33, name: 'James'},
    {id: 44, name: 'Harry'}
  ]
  isShowList: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showList() {
    this.myList = this.myDummyList.filter(x => x.id !== 22);
    this.isShowList = true;
  }
}
