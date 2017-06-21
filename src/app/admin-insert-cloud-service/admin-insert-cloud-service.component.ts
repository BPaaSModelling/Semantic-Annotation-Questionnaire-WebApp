import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import {EndpointSettings} from '../_settings/endpoint.settings';
import {Observable} from 'rxjs/Observable';
import {SearchResultModel} from '../_models/searchresult.model';
import {TempCloudService} from '../_models/tempCloudService';

@Component({
  selector: 'app-admin-insert-cloud-service',
  templateUrl: './admin-insert-cloud-service.component.html',
  styleUrls: ['./admin-insert-cloud-service.component.css']
})
export class AdminInsertCloudServiceComponent implements OnInit {
  private cloudService: TempCloudService;

  fieldResults$: Observable<SearchResultModel[]> = Observable.of(null);
  private options: RequestOptions;
  constructor(
      private http: Http,
      private jsonp: Jsonp) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
    this.cloudService = new TempCloudService();
  }

  ngOnInit() {
  }


  public getFields(searchEl: string) {

    console.log('field received: ' + searchEl );

    let search = new URLSearchParams();
    search.set('object', searchEl);

    this.http.get(EndpointSettings.getInsertEndpoint(), { search })
        .map(response => response.json()).subscribe(
        data => {

          console.log('fieldResults ' + JSON.stringify(data));
          this.fieldResults$ = Observable.of(data);


        }, error => console.log('Could not query services'));
  }

  private submitForm():void{
  this.addCloudService(this.cloudService);
  }

  public addCloudService(cs:TempCloudService):void{

    this.http.post(EndpointSettings.getAddCloudServiceEndpoint(), JSON.stringify(cs), this.options)
        .map(response => response.json()).subscribe(
        success => {
          console.log('Done' +JSON.stringify(success));


        }, error => console.log('error: '+error))
  }


}
