import { Component, Input } from '@angular/core';
import { Dragable } from '../model/dragable';

@Component({
  selector: 'dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.css']
})

export class DragableComponent {

  @Input() dragable: Dragable;

  constructor() { }

}
