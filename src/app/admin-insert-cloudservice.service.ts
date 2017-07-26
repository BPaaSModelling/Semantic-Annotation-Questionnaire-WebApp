import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, QueryEncoder, URLSearchParams, Jsonp} from '@angular/http';
import {EndpointSettings} from './_settings/endpoint.settings';
import {CloudServiceElementModel} from './_models/cloudservice-element.model';
import {CloudServiceModel} from './_models/cloudservice.model';
//import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import {SearchResultModel} from './_models/searchresult.model';
import {getResponseURL} from '@angular/http/src/http_utils';
import {VariableSettings} from './_settings/variable.settings';

@Injectable()
export class  InsertCSService {

    csModel: CloudServiceModel;
    csFields: CloudServiceElementModel[] = [];
    csDomain: string[] = [];
    public csField$: Observable<CloudServiceElementModel[]> = Observable.of([]);
    public domain$: Observable<string[]> = Observable.of([]);
    searchResults$: Observable<SearchResultModel[]> = Observable.of([]);
    private options: RequestOptions;
    private variables: VariableSettings;

    constructor(
        private http: Http,
        private jsonp: Jsonp) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
        this.variables = new VariableSettings;
    }

    queryCSModel(): void {

        this.http.get(EndpointSettings.getCloudServiceElementsEndpoint())
            .map(response => response.json()).subscribe(
            data => {
                console.log('CloudServices received: ' + JSON.stringify(data));
                this.csField$ = Observable.of(data);
                this.csFields = data;
                console.log('Elements parsing with success!');

                for (let i = 0; i< this.csFields.length; i++) {
                    if (this.csDomain.length === 0){
                        this.csDomain.push(this.csFields[0].domain);
                    }
                    var found_new_domain = false;
                    for (let j = 0; j < this.csDomain.length; j++ ) {
                        if (this.csFields[i].domain === this.csDomain[j]) {
                            found_new_domain = true;
                        }
                    }
                    if (!found_new_domain){
                        this.csDomain.push(this.csFields[i].domain);
                    }
                    this.domain$ = Observable.of(this.csDomain);
                }
                this.domain$ = Observable.of(this.csDomain)

            }, error => console.log('Could not query cloudservice fields'));

    }

    public search(ns: string, term: string, classes: boolean) {

        console.log("search received: " + ns +" :: " + term + " :: " + classes);

        let search: URLSearchParams = new URLSearchParams();
        search.set('ns', ns);
        search.set('search', term);
        search.set('search_for_classes', classes.toString());
        console.log('sending: ' + search.get('ns')  + ' - ' + search.get('search') + ' - ' + search.get('search_for_classes'));
        this.http.get(EndpointSettings.getSearchEndpoint(), { search: search })
            .map(response => response.json()).subscribe(

             data => {

                console.log("searchResults " +JSON.stringify(data));
                this.searchResults$ = Observable.of(data);


            }, error => console.log('Could not query services'));

    }

    public modifyCSElement(csElement: CloudServiceElementModel){
        for (let i = 0; i < this.csFields.length; i++){
            if (csElement.propertyURI == this.csFields[i].propertyURI){
                this.csFields[i] = csElement;
            }
        }
    }
    public createCloudService(csLabel: string): string{
         this.csModel = new CloudServiceModel();
         this.csModel.label = csLabel;
         this.csModel.properties = this.csFields;

let result: string ="";
        this.http.post(EndpointSettings.getAddCloudServiceEndpoint(), JSON.stringify(this.csModel))
            .map(response => response.json()).subscribe(
            data => {
                result = "OK";

            }, error =>
            result = "ERROR"
        );

        return result;
    }

}
