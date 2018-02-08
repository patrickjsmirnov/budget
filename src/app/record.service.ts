import { Injectable } from '@angular/core';

import { Record } from './record';
import { Records } from './records';

@Injectable()
export class RecordService {

  constructor() { }

  // сохранение записи в localStorage
  saveRecordLocalStorage(record: Record): void {
    localStorage.setItem(record.id.toString(), JSON.stringify(record));
  }

  // получение записи из localStorage
  getRecordLocalStorage(id: string): string {
    return localStorage.getItem(id);
  }

  // запись всех записей
  saveRecordsLocalStorage(records: Record[]): void {
    records.forEach((record) => {
      this.saveRecordLocalStorage(record);
    })
  }

  getRecords(): Record[] {
    return Records;
  }

  // валидация записи перед сохранением
  // quanity [-1000, 1000], 0 нельзя
  // comment < 512 буквы, цифры, пробелы, знаки препинания
  validateRecord(record: Record): boolean {
    if (Math.abs(record.quantity) > 1000 || record.quantity === 0) {
      return false;
    }
    if (!/[A-Za-z0-9 .,!'/-]*/.test(record.comment)) {
      return false;
    }

    return true;
  }

  // сохранение записи в localStorage
  saveRecord(record: Record): void {
    if (this.validateRecord(record)) {
      console.log('saving');
    }
  }

}
