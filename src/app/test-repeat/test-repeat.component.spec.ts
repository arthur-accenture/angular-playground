import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRepeatComponent } from './test-repeat.component';

describe('TestRepeatComponent', () => {
  let component: TestRepeatComponent;
  let fixture: ComponentFixture<TestRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
