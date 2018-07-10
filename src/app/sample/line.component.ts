import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
  
})

export class LineComponent {
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



        dragulaService.drop.subscribe((value) => {
          console.log(`drop: ${value[0]}`);
          console.log(value[1]);
          var div = value[1];
          
        });
      }

      

}