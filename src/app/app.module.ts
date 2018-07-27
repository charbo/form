import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { MainComponent } from './sample/main.component';
import { DraggableComponent } from './sample/draggable.component';
import { LineComponent } from './sample/line.component';
import { DynamicComponent } from './generic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DraggableComponent,
    LineComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
