import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent implements OnInit {
  records: Record[];
  selectedRecord: Record;
  toggleFlag: boolean;
  addFlag: boolean;
  editFlag: boolean;
  openFormFlag: boolean;

  onSelect(record: Record): void {
    this.selectedRecord = record;
    this.openFormFlag = true;
    this.editFlag = true;
    this.addFlag = false;
  }

  addRecord(): void {
    this.toggleFlag = true;
    this.addFlag = true;
    this.openFormFlag = true;
    this.editFlag = false;
  }

  saveRecord(record: Record): void {
    console.log(record);
    this.recordService.saveRecord(record);
  }

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.records = this.recordService.getRecords();
    this.recordService.saveRecordsLocalStorage(this.records);
  }

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }

}
