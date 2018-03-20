import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TriviaRoutingModule } from './trivia-routing.module';
import { TriviaComponent } from './trivia.component';

@NgModule({
  imports: [
    CommonModule,
    TriviaRoutingModule,
    FormsModule
  ],
  declarations: [TriviaComponent]
})
export class TriviaModule { }
