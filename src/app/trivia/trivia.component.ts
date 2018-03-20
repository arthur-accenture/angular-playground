import { Component, OnInit } from '@angular/core';
import { TriviaOptions } from '../core/models/trivia-options.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  triviaOptions: TriviaOptions;
  constructor() { }

  ngOnInit() {    
    this.triviaOptions = <TriviaOptions>{};
  }
  
  getQuestions(triviaOptions: NgForm){
    this.triviaOptions = triviaOptions.value;
    console.log(triviaOptions.value);
    console.log(this.triviaOptions);
  };

}
