import { Injectable } from '@angular/core';

import { Record } from './record';
import { Records } from './records';

@Injectable()
export class RecordService {
  tempRecord: Record;


  constructor() { }

  // сохранение записи в localStorage
  saveRecordLocalStorage(record: Record): void {
    localStorage.setItem(record.id.toString(), JSON.stringify(record));
  }

  // получение записи из localStorage по ключу
  // ключ - id
  getRecordLocalStorage(id: string): string {
    return localStorage.getItem(id);
  }

  // сохранение всех записей
  saveRecordsLocalStorage(records: Record[]): void {
    records.forEach((record) => {
      this.saveRecordLocalStorage(record);
    })
  }

  // получение записей
  getRecords(): Record[] {
    if (localStorage.length > 0) {
      Records.length = 0;
      Object.keys(localStorage).forEach((item) => {
        Records.push(JSON.parse(this.getRecordLocalStorage(item)));
      })
    }
    return Records;
  }

  // валидация записи перед сохранением
  // добавить меньше 512
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
  saveRecord(record: Record): boolean {
    if (this.validateRecord(record)) {
      this.saveRecordLocalStorage(record);
      return true;
    }

    return false;
  }


  // добавление новой записи
  addNewRecord(quantity: number, comment: string): void {
    this.tempRecord = {
      id: Records.length + 1,
      quantity: quantity,
      comment: comment
    }
    if (this.validateRecord(this.tempRecord)) {
        Records.push(this.tempRecord);
    }
    this.saveRecord(this.tempRecord);
  }

  // сумма quantity
  sumQuantityRecords(): number {
    let Records = this.getRecords();
    let arrQuantity = Records.map((item) => item.quantity);
    let sum = arrQuantity.reduce((sum, current) => sum + current, 0);
    return sum;
  }


}
