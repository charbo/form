import { Component, OnInit } from '@angular/core';

declare function initChtml(): any;

@Component({
  selector: 'chtml-component',
  templateUrl: './chtml.component.html',
  styleUrls: ['./chtml.component.css']
})

export class CHtmlComponent implements OnInit {


  ngOnInit(): void {
    initChtml();
  }

}
