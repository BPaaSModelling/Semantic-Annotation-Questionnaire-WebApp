import {Component, OnInit, Input} from '@angular/core';
import {QuestionnaireItemModel} from "../../_models/questionnaire-item.model";
import {QuestionnaireService} from "../../questionnaire.service";
import {SearchResultModel} from "../../_models/searchresult.model";
import {QuestionnaireItemComponent} from "../../questionnaire-item/questionnaire-item.component";

@Component({
  selector: 'search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css']
})
export class SearchQuestionComponent implements OnInit {
  @Input() qItem: QuestionnaireItemModel;

  private answerLabel:string;
  private answerCode:string;

  constructor(
    private qService: QuestionnaireService) { }

  ngOnInit() {
  }

  private search(term):void{
    let a = this.qService.search(this.qItem.searchNamespace, term, this.qItem.searchOnClassesInsteadOfInstances);
    console.log("%%%%% " +JSON.stringify(a));
  }

  private handleSearchSelect(item:SearchResultModel):void{
    this.answerCode = item.uri;
    this.qService.searchResults$ = null;
    this.answerLabel = item.label;
  }

  private nextQuestion():void{
    Object.assign(this.qItem.givenAnswerList,[this.answerCode]);
    this.answerCode = null;
    this.answerLabel = null;
    this.qService.updateQuestionnaire();
  }

}
