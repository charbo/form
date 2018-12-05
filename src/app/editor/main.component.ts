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

  constructor(dragulaService: DragulaService, draggableService: DummyService, formService: FormService) {
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

        //draggableService.getDraggables().subscribe(draggables => this.draggables = draggables);
        this.draggables = draggableService.getDraggables();
        this.form = this.formService.getForm();
      }


      addLine(): void {
        this.formService.addLine();
      }

      displayHtml(): void {
        this.form.generateHtml();
      }

      displayComponent($event): void {
        const draggableName = $event.target.attributes['data-id'].value;
        const draggable = this.draggables.filter(d => d.name === draggableName);
        draggable[0].visibility = true;
      }
}
