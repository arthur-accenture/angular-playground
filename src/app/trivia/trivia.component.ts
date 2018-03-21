import { Component, OnInit } from '@angular/core';
import { TriviaOptions, TriviaType } from '../core/models/trivia-options.model';
import { NgForm } from '@angular/forms';
import { SelectOption } from '../core/models/select-option.model';
import { TriviaService } from '../core/services/trivia.service';
import { TriviaQuestion } from '../core/models/trivia-questions.model';



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
  questions: Array<TriviaQuestion>;
  
  constructor(private triviaService:TriviaService) {

  }

  ngOnInit() {    
    this.triviaOptions = <TriviaOptions>{
      amount: 10
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
    this.triviaService.getQuestions(this.triviaOptions).subscribe(data => {
      this.questions = <TriviaQuestion[]> data;
    });
  };

}
