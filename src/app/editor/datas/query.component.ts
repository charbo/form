import { Component } from '@angular/core';
import { SourceService } from '../../ws/source.ws';
import { Query } from '../../model/datas/query';
import { QueryService } from '../../ws/query.ws';
import { Parameter } from '../../model/datas/parameter';


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
    const num = this.query.parameters.length + 1;
    const param = new Parameter();
    param.key = 'param' + num;
    param.value = 'value';
    this.query.parameters.push(param);
  }

  onSubmit() {
    this.submitted = true;
    this.queryService.saveQuery(this.query).subscribe();
  }

}

