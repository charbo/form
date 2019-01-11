import { Source } from './source';

export class Query {
  name: string;
  sql: string;
  series: string[];
  source: Source[];
}
