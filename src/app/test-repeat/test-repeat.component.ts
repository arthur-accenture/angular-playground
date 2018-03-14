import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-repeat',
  templateUrl: './test-repeat.component.html',
  styleUrls: ['./test-repeat.component.css']
})
export class TestRepeatComponent implements OnInit {
  private stringArray : Array<string>;
  constructor() { }

  ngOnInit() {
    this.stringArray = ['one', 'two', 'three'];
  }

}
