import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from "ng2-dragula";

import { AppComponent } from './app.component';
import { MainComponent } from './sample/main.component';
import { DragableComponent } from './sample/dragable.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DragableComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
