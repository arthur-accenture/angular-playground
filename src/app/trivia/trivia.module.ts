import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriviaRoutingModule } from './trivia-routing.module';
import { TriviaComponent } from './trivia.component';

@NgModule({
  imports: [
    CommonModule,
    TriviaRoutingModule
  ],
  declarations: [TriviaComponent]
})
export class TriviaModule { }
