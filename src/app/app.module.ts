import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

import { ActionsService } from '../services/actions.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
