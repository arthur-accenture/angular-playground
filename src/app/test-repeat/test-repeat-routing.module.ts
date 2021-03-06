import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRepeatComponent } from './test-repeat.component';

const routes: Routes = [
  {path: 'test_repeat', component: TestRepeatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRepeatRoutingModule { }
