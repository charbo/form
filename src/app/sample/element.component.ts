import { Component, Input } from '@angular/core';
import { Dragable } from '../model/dragable';

@Component({
  selector: 'form-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent {

  @Input() dragable: Dragable;

  constructor() { }

}
