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

  onSelect(record: Record): void {
    this.selectedRecord = record;
  }

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.records = this.recordService.getRecords();
  }

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }

}
