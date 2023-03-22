import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { XyzComponent } from './xyz/xyz.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    XyzComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [XyzComponent]
})
export class AppModule { }
