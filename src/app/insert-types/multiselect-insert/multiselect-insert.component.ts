import {Component, Input, OnInit} from '@angular/core';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';

@Component({
  selector: 'app-multiselect-insert',
  templateUrl: './multiselect-insert.component.html',
  styleUrls: ['./multiselect-insert.component.css']
})
export class MultiselectInsertComponent implements OnInit {
  @Input() element: CloudServiceElementModel;

  private answerCode: string[] = [];

  constructor(private insertService: InsertCSService) {
  }

  ngOnInit() {
  }

  private handleMultiSelect(answerID): void {
    let index = this.answerCode.indexOf(answerID, 0);
    if (index == -1) {
      //add item
      this.answerCode.push(answerID);
    } else {
      //remove item
      this.answerCode.splice(index, 1);
    }
  }

  private nextQuestion(): void {
    Object.assign(this.element.givenAnswerList, this.answerCode);
    this.answerCode = [];
    //this.insertService.updateQuestionnaire();
  }
}
