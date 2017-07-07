import {Component, Input, OnInit} from '@angular/core';
import {SearchResultModel} from '../../_models/searchresult.model';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';
import {AnswerModel} from '../../_models/answer.model';

@Component({
  selector: 'app-search-insert',
  templateUrl: './search-insert.component.html',
  styleUrls: ['./search-insert.component.css']
})
export class SearchInsertComponent implements OnInit {
  @Input() i: number;
  @Input() insertService: InsertCSService;
  @Input() propertyLabel: string;
  private selectedAnswer: AnswerModel;
  private textlabel: string;
  private queriedIndex: number;

  constructor(

      ) {

  }

  ngOnInit() {
    this.selectedAnswer = new AnswerModel();
    this.selectedAnswer.answerLabel = "";
    this.selectedAnswer.answerID = "";
    this.insertService.csFields[this.i].givenAnswerList.push(this.selectedAnswer);
    this.queriedIndex = -1;

  }

  private search(term: string): void{
    this.insertService.searchResults$ = null;
    this.queriedIndex = this.i;
    //console.log("queried index is now: " + this.queriedIndex)
    this.insertService.search(this.insertService.csFields[this.i].searchNamespace, term);
  }

  private handleSearchSelect(item:SearchResultModel):void{
    //console.log("queried index is still: " + this.queriedIndex)
    this.insertService.csFields[this.i].givenAnswerList[0].answerID = item.uri;
    this.insertService.csFields[this.i].givenAnswerList[0].answerLabel = item.label;
    this.insertService.searchResults$ = null;
  this.queriedIndex = -1;
  }


}

