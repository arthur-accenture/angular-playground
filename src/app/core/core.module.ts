import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouteLinksComponent } from './route-links/route-links.component';
import { TriviaService } from './services/trivia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  declarations: [RouteLinksComponent],
  exports: [
    RouteLinksComponent
  ],
  providers: [
    TriviaService
  ]
})
export class CoreModule { }
