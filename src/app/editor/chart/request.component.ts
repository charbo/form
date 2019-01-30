import { Query } from './../../model/datas/query';
import { ResourcesService } from './../../service/resources.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy } from '@angular/core';
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

export class RequestComponent implements OnDestroy {
  private subscription: Subscription;
  @Input() draggable: Draggable;

  requests: Request[];
  parameters: string[];
  items: string[];

  constructor(private formService: FormService, private resourceService: ResourcesService, private requestService: RequestService) {
    this.resourceService.getQueries().subscribe(
      queries => {
        this.requests = this.toRequests(queries);
        this.requestService.setRequests(this.requests);
      });
  }

  onRequestSelect(name: string): void {
    this.extractParameters(this.requests === undefined ? new Request() : this.requests.find(r => r.name === name));
  }

  private extractParameters(req: Request): void {
    this.parameters = req.parameters.map(p => p.key);
    if (this.parameters) {
      this.draggable.filters = new Array();
      this.parameters.forEach(p => {const prop = new Propertie(); prop.key = p; this.draggable.filters.push(prop); });
    }
    this.items = this.formService.getAvailableParents();
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toRequests(queries: Query[]): Request[] {
    const res = new Array();
    queries.forEach(q => {
      const r = new Request();
      r.name = q.name;
      r.parameters = new Array();
      q.parameters.forEach(p => {const prop = new Propertie(); prop.key = p.key; prop.value = p.value; r.parameters.push(prop); });
      res.push(r);
    });

    return res;
  }

}

