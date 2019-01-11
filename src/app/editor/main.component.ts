import { Component } from '@angular/core';


@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent {
  designerClass =  'invisible';
  datasClass =  'invisible';

  showDesigner(): void {
    this.designerClass = 'visible';
    this.datasClass = 'invisible';
  }


  showDatas(): void {
    this.datasClass = 'visible';
    this.designerClass = 'invisible';
  }

  getDesignerClass(): string {
    return this.designerClass;
  }


  getDatasClass(): string {
    return this.datasClass;
  }
}
