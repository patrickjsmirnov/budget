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
  @Input() addFlag: boolean;
  @Input() openFormFlag: boolean;
  @Input() editFlag: boolean;
  records: Record[];
  quantityField: string;
  commentField: string;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }

  saveRecord(record: Record): void {
    if (this.recordService.saveRecord(record)) {
        this.openFormFlag = false;
    }
  }
  update(): void {
    this.recordService.update();
  }

  addNewRecord(): void {
    this.recordService.addNewRecord(Number(this.quantityField), this.commentField);
  }

}
