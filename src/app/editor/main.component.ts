import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { DummyService } from '../service/dummy.service';
import { Draggable } from '../model/draggable';
import { Form } from '../model/form';
import { FormService } from '../service/form.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent {

  private formService: FormService;
  draggables: Draggable[] = [];
  form: Form;

  constructor(dragulaService: DragulaService, formService: FormService) {
        this.formService = formService;

        dragulaService.createGroup('main-bag', {
          copy: (el, source) => {
            return source.id === 'left';
          },
          copyItem: (draggable: Draggable) => {
            return draggable.clone();
          },
          accepts: (el, target, source, sibling) => {
              // To avoid dragging from right to left container
            return target.id !== 'left';
          }
        });

        // tslint:disable-next-line:max-line-length
        const d4 = '{"type":"chart","name":"chart","visibility":"hidden", "properties":[{"key" : "url", "value" : "url"}]}';

        const drag4: Draggable = Object.assign(new Draggable(), JSON.parse(d4));

        this.draggables = Array.of(drag4);
        this.form = this.formService.getForm();
      }


      addLine(): void {
        this.formService.addLine();
      }

      displayHtml(): void {

      }

      displayComponent($event): void {
        const draggableName = $event.target.attributes['data-id'].value;
        const draggable = this.draggables.filter(d => d.name === draggableName && d.visibility === 'hidden');
        if (draggable[0]) {
          draggable[0].visibility = 'visible';
        }
      }

      hideComponent($event): void {
        const draggableName = $event.target.attributes['data-id'].value;
        const draggable = this.draggables.filter(d => d.name === draggableName && d.visibility === 'visible');
        if (draggable[0]) {
          draggable[0].visibility = 'hidden';
        }
      }
}
