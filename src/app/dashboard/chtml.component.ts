import { Component, Input, AfterViewInit } from '@angular/core';
import { Draggable } from '../model/draggable';
import { RequestService } from '../service/request.service';


declare function initChtml(drag: any, request: any): any;

@Component({
  selector: 'chtml-component',
  templateUrl: './chtml.component.html',
  styleUrls: ['./chtml.component.css']
})

export class CHtmlComponent implements AfterViewInit {
  private content: Draggable;

  constructor(private requestService: RequestService) { }

  ngAfterViewInit(): void {
    initChtml(this.content, this.requestService.getRequest(this.content.dataset));
  }

  @Input()
  set draggable(draggable: Draggable) {
    this.content = draggable;
  }

}

