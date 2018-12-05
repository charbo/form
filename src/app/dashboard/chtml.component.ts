import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare function initChtml(id: any): any;

@Component({
  selector: 'chtml-component',
  templateUrl: './chtml.component.html',
  styleUrls: ['./chtml.component.css']
})

export class CHtmlComponent implements AfterViewInit {
  @Input() id: string;

  ngAfterViewInit(): void {
    console.log('---- ' + this.id);
    initChtml(this.id);
  }

}

