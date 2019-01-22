import { Component, Input } from '@angular/core';
import { Request } from '../../model/request';
import { Draggable } from '../../model/draggable';
import { FormService } from '../../service/form.service';
import { Propertie } from '../../model/propertie';
import { RequestService } from '../../service/request.service';

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

  constructor(private requestService: RequestService, private formService: FormService) {
    this.requestService.getRequests().subscribe(requests => this.requests = requests);
  }

  // TODO get request by name
  onRequestSelect(name: string): void {
    this.requestService.getRequests().subscribe(req => this.extractParameters(req));
  }

  private extractParameters(req: Request[]): void {
    this.parameters = req.find(r => r.name === name).parameters.map(p => p.key);
    if (this.parameters) {
      this.draggable.filters = new Array();
      this.parameters.forEach(p => {const prop = new Propertie(); prop.key = p; this.draggable.filters.push(prop); });
    }
    this.items = this.formService.getAvailableParents();
  }

}

