import { Component, Input, AfterViewInit } from '@angular/core';
import { Draggable } from '../model/draggable';

declare function initChtml(id: any, dataset: any, type: any): any;

@Component({
  selector: 'chtml-component',
  templateUrl: './chtml.component.html',
  styleUrls: ['./chtml.component.css']
})

export class CHtmlComponent implements AfterViewInit {
  private content: Draggable;

  ngAfterViewInit(): void {
    initChtml(this.content.name, this.content.dataset, this.content.type);
  }

  @Input()
  set draggable(draggable: Draggable) {
    this.content = draggable;
    console.log('got url: ', draggable);

  }

}

