import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() openForm: boolean;
  @Input() editFlag: boolean;
  @Output() onClosed = new EventEmitter<boolean>();
  records: Record[];
  quantityField: string;
  commentField: string;
  correctData: boolean;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.correctData = false;
  }

  close(): void {
    this.onClosed.emit(true);
    this.correctData = false;
  }

  saveRecord(record: Record): void {
    if (this.recordService.saveRecord(record)) {
        this.record.comment = '';
        this.record.quantity = null;
        this.correctData = false;
    }
    else {
      this.correctData = true;
    }
  }

  addNewRecord(): void {
    if (this.recordService.addNewRecord(Number(this.quantityField), this.commentField)) {
      this.quantityField = null;
      this.commentField = '';
      this.correctData = false;
    }
    else {
      this.correctData = true;
    }

  }
}
