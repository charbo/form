import { Injectable, OnDestroy } from '@angular/core';
import { Request } from '../model/request';
import { QueryService } from '../ws/query.ws';
import { Subscription } from 'rxjs';
import { Query } from '../model/datas/query';
import { Propertie } from '../model/propertie';
import { ResourcesService } from './resources.service';



@Injectable({ providedIn: 'root' })
export class RequestService implements OnDestroy {
  private subscription: Subscription;
  requests: Request[];

  constructor(private resourceService: ResourcesService) {
    // tslint:disable-next-line:max-line-length
    this.subscription = this.resourceService.getQueries().subscribe(queries => {this.requests = this.toRequests(queries); console.log('-- *****'); });
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getRequests(): Request[] {
    return this.requests;
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

  getRequest(name: string): Request {
    return this.requests === undefined ? new Request() : this.requests.find(r => r.name === name);
  }


}





