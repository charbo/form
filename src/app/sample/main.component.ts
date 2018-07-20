import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { DraggableService } from '../service/draggable.service';
import { Draggable } from '../model/draggable';
import { Form } from '../model/form';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent {

  draggables: Draggable[] = [];
  form: Form;

  constructor(dragulaService: DragulaService, draggableService: DraggableService) {
        dragulaService.setOptions('main-bag', {
          copy: function (el, source) {
            // To copy only elements in left container, the right container can still be sorted
            return source.id === 'left';
          },
          copySortSource: false,
          accepts: function(el, target, source, sibling) {
            // To avoid draggin from right to left container
            return source.id === 'left' || source.id.includes('line') && target.id.includes('line');
          }
        });

        dragulaService.drag.subscribe((value) => {

        });


        dragulaService.drop.subscribe((value) => {
          let draggableId = value[1].dataset.id;
          let dropped = this.draggables.filter(draggable => draggable.name === draggableId);
          console.log(dropped[0]);
        });


        draggableService.getDraggables().subscribe(draggables => this.draggables = draggables);
  
      }



}
