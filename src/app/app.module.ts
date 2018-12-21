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
import { CellComponent } from './editor/cell.component';
import { EditorComponent } from './editor/properties/editor.component';
import { ChartComponent } from './editor/chart/chart.component';
import { RequestComponent } from './editor/chart/request.component';
import { SourceComponent } from './editor/datas/source.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DraggableComponent,
    LineComponent,
    CellComponent,
    EditorComponent,
    RequestComponent,
    ChartComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    DragulaModule,
    DashboardModule,
    DragulaModule.forRoot()
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
