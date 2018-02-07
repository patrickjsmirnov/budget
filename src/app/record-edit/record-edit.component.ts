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
  @Input() flag: boolean;
  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }

  saveRecord(record: Record): void {
    this.recordService.saveRecord(record);
    this.recordService.saveRecordLocalStorage(record);
    // console.log('save');
  }

}
