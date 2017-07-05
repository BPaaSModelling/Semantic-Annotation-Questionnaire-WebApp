import {Component, Input, OnInit} from '@angular/core';
import {SearchResultModel} from '../../_models/searchresult.model';
import {CloudServiceElementModel} from '../../_models/cloudservice-element.model';
import {InsertCSService} from '../../admin-insert-cloudservice.service';

@Component({
  selector: 'app-search-insert',
  templateUrl: './search-insert.component.html',
  styleUrls: ['./search-insert.component.css']
})
export class SearchInsertComponent implements OnInit {
  @Input() element: CloudServiceElementModel;

  private answerLabel:string;
  private answerCode:string;

  constructor(
      private insertService: InsertCSService) { }

  ngOnInit() {
  }

  private search(term: string):void{
    let a = this.insertService.search(this.element.searchNamespace, term);
    console.log("%%%%% " +JSON.stringify(a));
  }

  private handleSearchSelect(item:SearchResultModel):void{
    this.answerCode = item.uri;
    this.insertService.searchResults$ = null;
    this.answerLabel = item.label;
  }

  private nextQuestion(): void {
    Object.assign(this.element.givenAnswerList,[this.answerCode]);
    this.answerCode = null;
    this.answerLabel = null;
    //this.insertService.updateQuestionnaire();
  }

}

