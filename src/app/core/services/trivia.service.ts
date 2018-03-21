import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Find a way to do following imports better.
// As this adds to Observable prototype, it actually adds to global scope, rather than just this spec
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

// Models
import { TriviaOptions } from '../models/trivia-options.model';
import { TriviaQuestion } from '../models/trivia-questions.model';

@Injectable()
export class TriviaService {

  constructor(private http:HttpClient) { }

  public getQuestions(options:TriviaOptions): Observable<Object>{
    let params = new HttpParams();
    for(let i in options){
      params = params.append(i, options[i]);
    }
    console.log('PARAMS:', params);
    return this.http.get('https://opentdb.com/api.php', {params: params})
    .map((response:any) => {
      return <TriviaQuestion[]>response.results.map((question, i) => {
        let output:TriviaQuestion = {
          category: question.category,
          correctAnswer: question.correct_answer,
          difficulty: question.difficulty,
          answers: question.incorrect_answers,
          text: question.question,
          type: question.type
        }
        // Generate random index to push correct answer into
        if(output.type === 'multiple'){
          let index:number = Math.floor(Math.random() * (i + 1));
          output.answers.splice(index, 0, question.correct_answer);
        }
        else if(output.type === 'boolean'){
          output.answers = ['True', 'False'];
        }
        
        return output;
      });
    })  // Unwrap the results
    .catch(error => {
      console.error('Error in getQuestions', error);
      return error;
    });
  }

}
