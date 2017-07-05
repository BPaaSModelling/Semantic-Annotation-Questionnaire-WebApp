import {Component, Input, OnInit} from '@angular/core';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';

@Component({
  selector: 'app-singleselect-insert',
  templateUrl: './singleselect-insert.component.html',
  styleUrls: ['./singleselect-insert.component.css']
})
export class SingleselectInsertComponent implements OnInit {

  @Input() element: CloudServiceElementModel;

  private answerCode: string;

  constructor(
      private insertService: InsertCSService
  ) { }

  ngOnInit() {
  }

  private handleSingleSelect(answerCode: string): void {
    this.answerCode = answerCode;
  }

  private nextQuestion(): void {
    Object.assign(this.element.givenAnswerList,[this.answerCode]);
    this.answerCode = null;
    //this.qService.updateQuestionnaire();
  }

}