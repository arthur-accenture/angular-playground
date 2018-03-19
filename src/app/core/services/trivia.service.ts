import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Find a way to do following imports better.
// As this adds to Observable prototype, it actually adds to global scope, rather than just this spec
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

const httpOptions= {
  headers: new HttpHeaders({"Content-Type": "application/json"})
}

@Injectable()
export class TriviaService {

  constructor(private http:HttpClient) { }

  public getQuestions(): Observable<Object>{
    let params = new HttpParams();
    params = params.append('amount', '10');
    params = params.append('category', '23');
    return this.http.get('https://opentdb.com/api.php', {params: params})
  }

}
