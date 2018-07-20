import { Component, Input } from '@angular/core';
import { Line } from '../model/line';

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class DragableComponent {

  @Input() line: Line;

  constructor() { }

}
