import { Component, Input } from '@angular/core';
import { Draggable } from '../model/draggable';

@Component({
  selector: 'draggable-component',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})

export class DraggableComponent {

  @Input() draggable: Draggable;

  constructor() { }
}
