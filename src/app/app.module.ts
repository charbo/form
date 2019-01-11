import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { MainComponent } from './editor/main.component';
import { DesignerComponent } from './editor/designer/designer.component';
import { DatasComponent } from './editor/datas/datas.component';
import { DraggableComponent } from './editor/designer/draggable.component';
import { LineComponent } from './editor/designer/line.component';
import { CellComponent } from './editor/designer/cell.component';
import { EditorComponent } from './editor/properties/editor.component';
import { ChartComponent } from './editor/chart/chart.component';
import { RequestComponent } from './editor/chart/request.component';
import { SourceComponent } from './editor/datas/source.component';
import { QueryComponent } from './editor/datas/query.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesignerComponent,
    DatasComponent,
    DraggableComponent,
    LineComponent,
    CellComponent,
    EditorComponent,
    RequestComponent,
    ChartComponent,
    SourceComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
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
