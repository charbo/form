import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent {

  @Input() text: string;

    
  
}