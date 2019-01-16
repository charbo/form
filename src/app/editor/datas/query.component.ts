import { Component } from '@angular/core';
import { SourceService } from '../../ws/source.ws';
import { Query } from '../../model/datas/query';
import { QueryService } from '../../ws/query.ws';


@Component({
  selector: 'query-component',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})

export class QueryComponent  {
  submitted = false;
  query = new Query();
  sources: string[];

  constructor(private sourceService: SourceService, private queryService: QueryService) {
    this.sourceService = sourceService;
    this.sourceService.getSources().subscribe(sources => this.sources = sources.map(s => s.name));
  }

  addSerie(): void {
    const num = this.query.series.length + 1;
    this.query.series.push('Serie' + num);
  }

  onSubmit() {
    this.submitted = true;
    this.queryService.saveQuery(this.query).subscribe();
  }

}

