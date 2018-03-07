import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  declarations: [MainMenuComponent, LandingPageComponent]
})
export class LandingPageModule { }
