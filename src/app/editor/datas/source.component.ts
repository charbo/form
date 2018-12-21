import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SourceService } from '../../service/source.service';
import { Values } from '../../model/values';
import { Source } from '../../model/design/source';


@Component({
  selector: 'source-component',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})

export class SourceComponent  {

  sources: Source[];


  constructor(private sourceService: SourceService) {
    this.sourceService.getSources().subscribe(sources => this.sources = sources);
  }


}

