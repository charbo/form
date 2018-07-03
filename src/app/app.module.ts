import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from "ng2-dragula";

import { AppComponent } from './app.component';
import { LineComponent } from './sample/line.component';
import { ElementComponent } from './sample/element.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
