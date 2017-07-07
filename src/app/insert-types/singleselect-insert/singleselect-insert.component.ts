import {Component, Input, OnInit} from '@angular/core';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';
import {AnswerModel} from '../../_models/answer.model';

@Component({
  selector: 'app-singleselect-insert',
  templateUrl: './singleselect-insert.component.html',
  styleUrls: ['./singleselect-insert.component.css']
})
export class SingleselectInsertComponent implements OnInit {
  @Input() i;
  @Input() insertService: InsertCSService;
  private answers: AnswerModel[] = [];
  private selectedAnswer: AnswerModel;

  constructor(
  ) {
    this.selectedAnswer = new AnswerModel();

  }

  ngOnInit() {
  }

  private handleSingleSelect(answer): void {
    this.answers = []
    this.insertService.csFields[this.i].givenAnswerList = [];
    this.selectedAnswer.answerID = answer.answerID;
    this.selectedAnswer.answerLabel = answer.answerLabel;
    this.answers.push(this.selectedAnswer);
    this.insertService.csFields[this.i].givenAnswerList = this.answers;
    //console.log(this.insertService.csFields[this.i].givenAnswerList.length + ' - ' + this.insertService.csFields[this.i].givenAnswerList[0].answerID);
  }
}
