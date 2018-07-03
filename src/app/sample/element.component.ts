import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'form-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent {
    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('element-bag', {
          copy: true
        });
      }
  
}