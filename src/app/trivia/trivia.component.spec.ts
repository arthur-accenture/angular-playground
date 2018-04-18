import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TriviaComponent } from './trivia.component';
import { TriviaService } from '../core/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TriviaComponent', () => {
  let component: TriviaComponent;
  let fixture: ComponentFixture<TriviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [TriviaComponent],
      providers: [TriviaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
