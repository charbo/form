import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { MainComponent } from './editor/main.component';
import { DraggableComponent } from './editor/draggable.component';
import { LineComponent } from './editor/line.component';
import { DynamicComponent } from './editor/generic/dynamic.component';
import { CellComponent } from './editor/cell.component';
import { EditorComponent } from './editor/properties/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DraggableComponent,
    LineComponent,
    CellComponent,
    EditorComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
