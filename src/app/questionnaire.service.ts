import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Http, Headers, Response, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import { EndpointSettings } from './_settings/endpoint.settings';
import { QuestionnaireModel} from './_models/questionnaire.model';
import { QuestionnaireItemModel} from './_models/questionnaire-item.model';
import {ServiceModel} from "./_models/service.model";
import 'rxjs/add/operator/toPromise';
import {SearchResultModel} from "./_models/searchresult.model";
import 'rxjs/add/observable/throw';


@Injectable()
export class QuestionnaireService {

  private questionnaireSource:QuestionnaireModel = new QuestionnaireModel();
  private questionnaireBehavior:BehaviorSubject<QuestionnaireModel> = new BehaviorSubject(this.questionnaireSource);

  //private questionnaireCompletedBehavior:BehaviorSubject<boolean> = new BehaviorSubject(false);
  private qItemBehaviour:BehaviorSubject<QuestionnaireItemModel> = new BehaviorSubject(new QuestionnaireItemModel());

  completed$: Observable<boolean> = Observable.of(false);

  serviceData$: Observable<ServiceModel[]> = Observable.of(null);
  searchResults$: Observable<SearchResultModel[]> = Observable.of(null);

  private options:RequestOptions;

  constructor(
    private http: Http,
    private jsonp: Jsonp) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }

  public setupNewQuestionnaire():void{
    this.queryQuestionnaire(new QuestionnaireModel());
  }

  private queryQuestionnaire(content:QuestionnaireModel): void {
    //commented for development purpose
    this.queryServices(content);
    this.http.post(EndpointSettings.getQuestionnaireEndpoint(), JSON.stringify(content))
      .map(response => response.json()).subscribe(
        data => {

          console.log("Questionnaire: " +JSON.stringify(data));
          this.questionnaireSource = data;
          this.questionnaireBehavior.next(this.questionnaireSource);
          this.completed$ = Observable.of(this.questionnaireSource.completed);
          this.setSelectedQItem(this.questionnaireSource.questionItemList.find(x => x.questionID ===this.questionnaireSource.lastQuestionID));

    }, error => console.log('Could not query the questionnaire'));
  }

  private queryServices(content:QuestionnaireModel): void {
    this.http.post(EndpointSettings.getServiceDiscoveryEndpoint(), JSON.stringify(content))
      .map(response => response.json()).subscribe(
      data => {

        console.log("Services " +JSON.stringify(data));
        this.serviceData$ = Observable.of(data);


      }, error => console.log('Could not query services'));
  }

  public get questionnaireData():Observable<QuestionnaireModel> {
    return this.questionnaireBehavior.asObservable();
  }

  public setSelectedQItem(item:QuestionnaireItemModel):void{
    console.log("item with id was set: " +item.questionID);
    this.qItemBehaviour.next(item);
  }

  public get selectedQItem() {
   return this.qItemBehaviour.asObservable();
   }

   public test(item:QuestionnaireItemModel):void{
    let test = this.questionnaireSource.questionItemList.find(x => x.questionID ===item.questionID);
    console.log("+++++++ " +test.givenAnswerList.toString());
     console.log("--------------");
   }

   public updateQuestionnaire():void{
     this.queryQuestionnaire(this.questionnaireSource);
   }

  public search(ns: string, term: string, classes: boolean) {

    console.log("search received: " +ns +" :: " + term + " :: " + classes);
    let search = new URLSearchParams()
    search.set('ns', ns);
    search.set('search', term);
    search.set('search_for_classes', classes.toString());

    this.http.get(EndpointSettings.getSearchEndpoint(), { search })
      .map(response => response.json()).subscribe(
      data => {

        console.log("searchResults " +JSON.stringify(data));
        this.searchResults$ = Observable.of(data);


      }, error => console.log('Could not query services'));
  }

  public getCompletedQuestionDomainList():string[]{
    return this.questionnaireSource.completedQuestionDomainList;
  }



}
