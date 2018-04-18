import { Component, OnInit } from '@angular/core';
import { TriviaOptions, TriviaType } from '../core/models/trivia-options.model';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../core/services';
import { SelectOption, TriviaQuestion, TriviaStat } from '../core/models';



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
  answersSubmitted: boolean;
  round: number = 0;
  lastRoundStats: TriviaStat;

  constructor(private triviaService: TriviaService) {

  }

  ngOnInit() {
    this.triviaOptions = <TriviaOptions>{
      amount: 10
    };
    this.types = [
      { id: '', display: '' },
      { id: 'multiple', display: 'Multiple Choice' },
      { id: 'boolean', display: 'True / False' },
    ];
    this.difficulties = [
      { id: '', display: '' },
      { id: 'easy', display: 'Easy' },
      { id: 'medium', display: 'Medium' },
      { id: 'hard', display: 'Hard' },
    ];
    this.categories = [
      { id: '', display: '' },
      { id: 9, display: 'General Knowledge' },
      { id: 10, display: 'Entertainment: Books' },
      { id: 11, display: 'Entertainment: Film' },
      { id: 12, display: 'Entertainment: Music' },
      { id: 13, display: 'Entertainment: Musicals & Theatres' },
      { id: 14, display: 'Entertainment: TV' },
      { id: 15, display: 'Entertainment: Video Games' },
      { id: 16, display: 'Entertainment: Board Games' },
      { id: 17, display: 'Science and Nature' },
      { id: 18, display: 'Computers' },
      { id: 19, display: 'Math' },
      { id: 20, display: 'Mythology' },
      { id: 21, display: 'Sport' },
      { id: 22, display: 'Geography' },
      { id: 23, display: 'History' },
      { id: 24, display: 'Politics' },
      { id: 25, display: 'Art' },
      { id: 26, display: 'Celebrities' },
      { id: 27, display: 'Animals' },
      { id: 28, display: 'Vehicles' },
      { id: 29, display: 'Enterainment: Comics' },
      { id: 30, display: 'Gadgets' },
      { id: 31, display: 'Entertainment: Anime' },
      { id: 32, display: 'Entertainment: Cartoons and Animations' },

    ];
  }

  getQuestions() {
    console.log(this.triviaOptions);
    this.triviaService.getQuestions(this.triviaOptions).subscribe(data => {
      this.questions = <TriviaQuestion[]>data;
      this.answersSubmitted = false;
      this.round++;
    });

  };

  checkAnswers() {
    // Go through questions and "mark"
    this.questions = this.questions.map(question => {
      question.isCorrect = question.selectedAnswer === question.correctAnswer;
      return question;
    });
    console.log('Questions', this.questions);
    this.answersSubmitted = true;
    let category = this.categories.find(category => {
      return Number(category.id) === Number(this.triviaOptions.category);
    });
    this.lastRoundStats = {
      mark: this.questions.reduce((count, question) => {
        if (question.isCorrect) {
          count++;
        }
        return count;
      }, 0),
      outOf: this.triviaOptions.amount,
      category: category && category.display,
    }
    console.log('Last round:', this.lastRoundStats);
  }

}
