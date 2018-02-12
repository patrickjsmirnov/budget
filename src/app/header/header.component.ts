import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSum: number;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.currentSum = this.recordService.sumQuantityRecords();
  }

}
