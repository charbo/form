import { Component, Input, AfterViewInit } from '@angular/core';
import { Draggable } from '../model/draggable';
import { DummyService } from '../service/dummy.service';

declare function initChtml(drag: any, request: any): any;

@Component({
  selector: 'chtml-component',
  templateUrl: './chtml.component.html',
  styleUrls: ['./chtml.component.css']
})

export class CHtmlComponent implements AfterViewInit {
  private content: Draggable;

  constructor(private dummyService: DummyService) { }

  ngAfterViewInit(): void {
    initChtml(this.content, this.dummyService.getRequest(this.content.dataset));
  }

  @Input()
  set draggable(draggable: Draggable) {
    this.content = draggable;
  }

}

