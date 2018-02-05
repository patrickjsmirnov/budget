import { Injectable } from '@angular/core';

import { Record } from './record';
import { Records } from './records';

@Injectable()
export class RecordService {

  constructor() { }

  getRecords(): Record[] {
    return Records;
  }

}
