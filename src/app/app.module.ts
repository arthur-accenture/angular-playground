import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LandingPageModule } from './landing-page';
import { CoreModule } from './core';
import { TestRepeatModule } from './test-repeat';
import { PageNotFoundModule } from './page-not-found';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    TestRepeatModule,
// Always load PageNotFound last (as it has pagenotfound, a route which needs to have lowest priority).
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
