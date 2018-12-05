import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHtmlComponent } from './chtml.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CHtmlComponent
  ],
  exports:[
    CHtmlComponent
  ]
})
export class DashboardModule { }
