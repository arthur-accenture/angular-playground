import { Component, OnInit } from '@angular/core';
import { TriviaOptions, TriviaType } from '../core/models/trivia-options.model';
import { NgForm } from '@angular/forms';
import { SelectOption } from '../core/models/select-option.model';



@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  triviaOptions: TriviaOptions;
  types: Array<SelectOption>;
  difficulties: Array<SelectOption>;
  categories: Array<SelectOption>;

  constructor() { }

  ngOnInit() {    
    this.triviaOptions = <TriviaOptions>{
      number: 10
    };
    this.types = [
      {id: '', display: ''},
      {id: 'multiple', display: 'Multiple Choice'},
      {id: 'boolean', display: 'True / False'},
    ];
    this.difficulties = [
      {id: '', display: ''},
      {id: 'easy', display: 'Easy'},
      {id: 'medium', display: 'Medium'},
      {id: 'hard', display: 'Hard'},
    ];
    this.categories = [
      {id: 21, display: 'Sport'},
      {id: 22, display: 'Geography'},
      {id: 23, display: 'History'},
    ];
  }
  
  getQuestions(){
    console.log(this.triviaOptions);
  };

}
