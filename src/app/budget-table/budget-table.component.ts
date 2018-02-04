import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { Records } from '../records';

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent implements OnInit {
  records = Records;
  selectedRecord: Record;

  onSelect(record: Record): void {
    this.selectedRecord = record;
  }

  constructor() { }

  ngOnInit() {
    //inicialization logic
  }

}
