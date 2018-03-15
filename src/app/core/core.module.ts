import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouteLinksComponent } from './route-links/route-links.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [RouteLinksComponent],
  exports: [
    RouteLinksComponent
  ]
})
export class CoreModule { }
