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

@Injectable()
export class TriviaService {

  constructor(private http:HttpClient) { }

  public getQuestions(options:TriviaOptions): Observable<Object>{
    let params = new HttpParams();
    for(let i in options){
      params = params.append(i, options[i]);
    }
    return this.http.get('https://opentdb.com/api.php', {params: params})
    .map((response:any) => response.results)  // Unwrap the results
    .catch(error => {
      console.error('Error in getQuestions', error);
      return error;
    });
  }

}
