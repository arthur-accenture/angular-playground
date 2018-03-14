import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRepeatComponent } from './test-repeat.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'repeat', component: TestRepeatComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRepeatRoutingModule { }
