import { Injectable } from '@angular/core';

import { Source } from '../model/datas/source';
import { Query } from '../model/datas/query';
import { QueryService } from './../ws/query.ws';
import { SourceService } from '../ws/source.ws';
import { Observable, Subject, BehaviorSubject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class ResourcesService {
  private subjectSource = new BehaviorSubject<any[]>([]);
  private subjectQuery = new Subject<Query[]>();
  sources: Source[];
  queries: Query[];

  constructor(private queryService: QueryService, private sourceService: SourceService) {
    this.sourceService.getSources().subscribe(sources =>  {
      this.sources = sources;
      console.log('source ', sources);
      this.subjectSource.next(this.sources);
    });
    this.queryService.getQueries().subscribe(queries => {
      this.queries = queries;
      console.log('queries ', queries);
      this.subjectQuery.next(this.queries);
    } );
  }

  getSources(): Observable<Source[]> {
    return this.subjectSource.asObservable();
  }

  getQueries(): Observable<Query[]> {
    return this.subjectQuery.asObservable();
  }

  addSources(source: Source) {
    this.sources.push(source);
    this.subjectSource.next(this.sources);

  }

  addQuery(query: Query) {
    this.queries.push(query);
    this.subjectQuery.next(this.queries);
  }

}





