import { Injectable } from '@angular/core';
import { Request } from '../model/request';
import { QueryService } from '../ws/query.ws';
import { Observable } from 'rxjs';
import { Query } from '../model/datas/query';
import { map } from 'rxjs/operators';
import { Propertie } from '../model/propertie';



@Injectable({ providedIn: 'root' })
export class RequestService {

  requests: Request[];

  constructor(private queryService: QueryService) { }

  getRequests(): Observable<Request[]> {
    return this.queryService.getQueries().pipe(map(queries => this.requests = this.toRequests(queries)));
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
    return this.requests.find(r => r.name === name);
  }


}





