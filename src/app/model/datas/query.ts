import { Parameter } from './parameter';
export class Query {
  name: string;
  sql: string;
  parameters: Parameter[] = new Array();
  source: string;
}
