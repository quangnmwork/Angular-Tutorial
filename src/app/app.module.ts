import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightLightDirective } from './highlight/highlight.directive';
import { OtherHighlightDirective } from './other-highlight/other-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  declarations: [AppComponent, HightLightDirective, OtherHighlightDirective, UnlessDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
