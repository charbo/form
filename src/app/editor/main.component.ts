import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { ChartService } from '../service/chart.service';
import { DraggableService } from '../service/draggable.service';
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
  private chartService: ChartService;
  private draggableService: DraggableService;

  draggables: Draggable[] = [];
  form: Form;

  constructor(dragulaService: DragulaService, formService: FormService, chartService: ChartService, draggableService: DraggableService) {
        this.formService = formService;
        this.chartService = chartService;
        this.draggableService = draggableService;

        dragulaService.createGroup('main-bag', {
          copy: (el, source) => {
            return source.id === 'left';
          },
          copyItem: (draggable: Draggable) => {
            const drag = draggable.clone();
            return drag;
          },
          accepts: (el, target, source, sibling) => {
              // To avoid dragging from right to left container
            return target.id !== 'left';
          }
        });


        this.draggables = this.draggableService.getDraggables();
        this.form = this.formService.getForm();
      }


      addLine(): void {
        this.formService.addLine();
      }

      createChart(): void {
        this.chartService.addNewChart();
      }

}
