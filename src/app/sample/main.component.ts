import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { DRAGABLES } from '../service/mock-dragables';
import { MockServiceDragable } from '../service/mock-form';
import { Dragable } from '../model/dragable';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent {

  dragables: Dragable[] = [];

  constructor(dragulaService: DragulaService, dragableService: MockServiceDragable) {
        dragulaService.setOptions('main-bag', {
          copy: function (el, source) {
            // To copy only elements in left container, the right container can still be sorted
            return source.id === 'left';
          },
          copySortSource: false,
          accepts: function(el, target, source, sibling) {
            // To avoid draggin from right to left container
            return source.id === 'left' || source.id === target.id;
          }
        });

        dragulaService.drag.subscribe((value) => {
          console.log(`drag: ${value[0]}`);
          console.log(value);
          var div = value[0];
        });


        dragulaService.drop.subscribe((value) => {
          console.log(`drop: ${value[0]}`);
          console.log(value[1]);
          var div = value[1];
          console.log('--- : '+ div.id);

          const [bagName, e, el] = value;
          console.log('id is:', e.dataset.id);
        });


        let form = dragableService.getFrom();

        for (let element of form.lines[0].elements) {
          this.dragables.push(element.parent);
        }
      }



}
