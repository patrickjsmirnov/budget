import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecordService } from './record.service';

import { AppComponent } from './app.component';
import { BudgetTableComponent } from './budget-table/budget-table.component';
import { RecordEditComponent } from './record-edit/record-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTableComponent,
    RecordEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
