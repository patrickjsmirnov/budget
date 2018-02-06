import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})

export class RecordEditComponent implements OnInit {
  @Input() record: Record;
  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }

  saveRecords(record: Record): void {
    this.records = this.recordService.saveRecords(this.record);
  }

}
