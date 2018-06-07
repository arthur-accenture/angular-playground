// This file is here so that the dynamic route links can work
// There's not actually any routes here, but to access the routes to generate links at the top of the page
// We need routing module here.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
