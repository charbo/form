import { Component, Input } from '@angular/core';
import { DummyService } from '../../service/dummy.service';
import { Request } from '../../model/request';
import { Draggable } from '../../model/draggable';
import { FormService } from '../../service/form.service';
import { Propertie } from '../../model/propertie';

@Component({
  selector: 'request-component',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent {
  @Input() draggable: Draggable;

  requests: Request[];
  parameters: string[];
  items: string[];

  constructor(private dummyService: DummyService, private formService: FormService) {
    this.requests = this.dummyService.getRequests();
  }

  onRequestSelect(name: string): void {
    this.parameters = this.requests.find(r => r.name === name).parameters.map(p => p.key);
    if (this.parameters) {
      this.draggable.filters = new Array();
      this.parameters.forEach(p => {const prop = new Propertie(); prop.key = p; this.draggable.filters.push(prop); });
    }
    this.items = this.formService.getAvailableParents();
  }

}

