import { Component, Input } from '@angular/core';
import { Line } from '../../model/line';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'line-component',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class LineComponent {

  @Input() line: Line;

  private formService: FormService;

  constructor(formService: FormService) {
    this.formService = formService;
  }

  addCell(): void {
    this.formService.addCell(this.line.index);
  }

}
