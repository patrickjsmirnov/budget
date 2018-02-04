import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})

export class RecordEditComponent implements OnInit {
  @Input() record: Record;

  constructor() { }

  ngOnInit() {
  }

}
