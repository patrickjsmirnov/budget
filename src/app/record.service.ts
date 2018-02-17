import { Injectable } from '@angular/core';
import { Sum } from './sum';
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
    records.forEach((record) => this.saveRecordLocalStorage(record));
  }

  // получение записей
  getRecords(): Record[] {
    if (localStorage.length > 0) {
      Records.length = 0;
      Object.keys(localStorage).forEach((item) => {
        Records.push(JSON.parse(this.getRecordLocalStorage(item)));
      })
      console.log('sort');
      return Records.sort((a, b) => a.id - b.id);
    }
    return Records;
  }

  // валидация записи перед сохранением
  validateRecord(record: Record): boolean {
    if (!(record.quantity && record.comment)) {
      return false;
    }

    if (Math.abs(record.quantity) > 1000 || record.quantity === 0) {
      return false;
    }
    if (!/[а-яА-ЯёЁa-zA-Z0-9 .,!'/-]+$/.test(record.comment)) {
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
  addNewRecord(quantity: number, comment: string): boolean {
    this.tempRecord = {
      id: Records.length + 1,
      quantity: quantity,
      comment: comment
    }
    if (this.saveRecord(this.tempRecord)) {
        Records.push(this.tempRecord);
        return true;
    }

    return false;
  }

  // сумма quantity
  sumQuantityRecords(): number {
    let Records = this.getRecords();
    let arrQuantity = Records.map((item) => item.quantity);
    let sum = arrQuantity.reduce((sum, current) => sum + current, 0);
    return sum;
  }


}
