import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { MainComponent } from './editor/main.component';
import { DraggableComponent } from './editor/draggable.component';
import { LineComponent } from './editor/line.component';
import { DynamicComponent } from './editor/generic/dynamic.component';
import { CellComponent } from './editor/cell.component';
import { EditorComponent } from './editor/properties/editor.component';
import { CHtmlComponent } from './dashboard/chtml.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DraggableComponent,
    LineComponent,
    CellComponent,
    EditorComponent,
    CHtmlComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    DragulaModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
