import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.component.html',
  styleUrls: ['./record-add.component.css']
})
export class RecordAddComponent implements OnInit {
  @Input() toggle: boolean;
  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }

  saveRecord(record: Record): void {
    console.log('save');
  }

}
