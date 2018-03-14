import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteLinksComponent } from './route-links/route-links.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [PageNotFoundComponent, RouteLinksComponent],
  exports: [
    RouteLinksComponent
  ]
})
export class CoreModule { }
