import {Component, Input, OnInit} from '@angular/core';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';

@Component({
  selector: 'app-value-insert',
  templateUrl: './value-insert.component.html',
  styleUrls: ['./value-insert.component.css']
})
export class ValueInsertComponent implements OnInit {
  @Input() i;
  @Input() insertService: InsertCSService;
  private comparisonAnswerCode: string;


  constructor(
  ) {
  }

  ngOnInit() {
  }

  private handleOperationsSingleSelect(answerCode: string): void {
    this.insertService.csFields[this.i].comparisonAnswer = answerCode;
    //this.comparisonAnswerCode = answerCode;
    console.log('set comparisonAnswer ' + this.comparisonAnswerCode);
  }
}
