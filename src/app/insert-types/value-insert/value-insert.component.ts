import {Component, Input, OnInit} from '@angular/core';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';

@Component({
  selector: 'app-value-insert',
  templateUrl: './value-insert.component.html',
  styleUrls: ['./value-insert.component.css']
})
export class ValueInsertComponent implements OnInit {
  @Input() element: CloudServiceElementModel;

  private answerValue: string;
  private comparisonAnswerCode: string;

  constructor(
      private insertService: InsertCSService
  ) { }

  ngOnInit() {
  }

  private handleOperationsSingleSelect(answerCode: string): void {
    this.comparisonAnswerCode = answerCode;
    console.log('set comparisonAnswer ' + this.comparisonAnswerCode);
  }

  private nextQuestion():void {
    Object.assign(this.element.givenAnswerList, [this.answerValue]);
    this.element.comparisonAnswer = this.comparisonAnswerCode;
    this.answerValue = null;
    //this.insertService.updateQuestionnaire();
  }

}
