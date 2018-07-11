import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { DRAGABLES } from '../service/mock-dragables';

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']

})

export class LineComponent {

  dragables = DRAGABLES;

  constructor(private dragulaService: DragulaService) {
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
          /**
          copy: true,
          removeOnSpill: true,
          // moves: function (el, container, handle) {
          //  console.log(handle.classList.contains('handle'));
          //  return handle.classList.contains('handle');
          //},
          accepts: function (el, target, source, sibling) {
            return true;
            //return (source.id === "left" && target.id === "right") || (source.id == target.id && source.id == "right");
          }
           */
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
      }



}
