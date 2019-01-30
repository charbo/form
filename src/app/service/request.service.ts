import { Injectable, OnDestroy } from '@angular/core';
import { Request } from '../model/request';
import { QueryService } from '../ws/query.ws';
import { Subscription } from 'rxjs';
import { Query } from '../model/datas/query';
import { Propertie } from '../model/propertie';
import { ResourcesService } from './resources.service';



@Injectable({ providedIn: 'root' })
export class RequestService {
  private subscription: Subscription;
  requests: Request[];

  constructor() {  }

  getRequests(): Request[] {
    return this.requests;
  }

  setRequests(requests: Request[]): void {
    this.requests = requests;
  }

  getRequest(name: string): Request {
    return this.requests === undefined ? new Request() : this.requests.find(r => r.name === name);
  }


}





