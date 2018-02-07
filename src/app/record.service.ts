import { Injectable } from '@angular/core';

import { Record } from './record';
import { Records } from './records';

@Injectable()
export class RecordService {

  constructor() { }

  // запись record в LocalStorage
  saveRecordLocalStorage(record: Record): void {
    localStorage.setItem(record.id.toString(), JSON.stringify(record));
  }

  // получение record из LocalStorage
  getRecordLocalStorage(id: string): string {
    return localStorage.getItem(id);
  }


  getRecords(): Record[] {
    return Records;
  }

  saveRecord(record: Record): void {
    console.log(Records);
    console.log(record);
    console.log('saving');
  }

}
