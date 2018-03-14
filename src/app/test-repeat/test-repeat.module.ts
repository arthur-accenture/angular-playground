import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRepeatRoutingModule } from './test-repeat-routing.module';
import { TestRepeatComponent } from './test-repeat.component';

@NgModule({
  imports: [
    CommonModule,
    TestRepeatRoutingModule
  ],
  declarations: [TestRepeatComponent]
})
export class TestRepeatModule { }
