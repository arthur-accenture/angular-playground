import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TriviaService } from './trivia.service';
import { TriviaOptions } from '../models/trivia-options.model';

describe('TriviaService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TriviaService,
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', inject([TriviaService], (service: TriviaService) => {
    expect(service).toBeTruthy();
  }));

  it('should call the correct URL for getQuestions', async(inject([TriviaService, HttpTestingController],
    (service: TriviaService, backend: HttpTestingController) => {
      const options = <TriviaOptions>{amount: 10, category: 23}; 
      service.getQuestions(options).subscribe(); // No need to check response here

      backend.expectOne((request: HttpRequest<any>) => {
        console.log('request', request);
        console.log('params', request.params);
        return request.url == 'https://opentdb.com/api.php';
      }, `Stubbed GET for trivia questions.`);
    })
  ));

  it('should return some questions for getQuestions', async(inject([TriviaService, HttpTestingController],
    (service: TriviaService, backend: HttpTestingController) => {
      const options = <TriviaOptions>{amount: 10, category: 23}; 
      service.getQuestions(options).subscribe((questions:any) => {
        // TODO: Currently questions is typed as any. We should probably create a type for response
        // e.g. TriviaResult or Question
        
        expect(questions).toBeTruthy();
        expect(questions.length).toBeGreaterThan(0);
      });

      // Create a mock response;

      // backend.expectOne('https://opentdb.com/api.php')
      // Not doing line above as it matches the whole URL (with parameters) rather than just base url
      // It is actually expecting something like this:
      // backend.expectOne('https://opentdb.com/api.php?amount=10&category=23')
      // So instead, we do this:
      backend.expectOne((request: HttpRequest<any>) => {
        return request.url === 'https://opentdb.com/api.php' && request.method === 'GET';
      }, `Stubbed GET for trivia questions.`)      
      .flush({results: [{"category": "History"}]},  {status: 200, statusText: 'Ok'});
    })
  ))
});
