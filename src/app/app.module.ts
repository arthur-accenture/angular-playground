import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LandingPageModule } from './landing-page';
import { CoreModule } from './core';
import { TestRepeatComponent } from './test-repeat/test-repeat.component';
import { TestRepeatModule } from './test-repeat';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    TestRepeatModule,
// Always load CoreModule last (as it has pagenotfound, a route which needs to have lowest priority).
// If we need something in CoreModule loaded first, we should separate pagenotfound into its own module, and load last.
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
