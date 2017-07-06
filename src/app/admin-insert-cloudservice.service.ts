import {Injectable} from '@angular/core';
import {Http, Jsonp, Headers, RequestOptions} from '@angular/http';
import {EndpointSettings} from './_settings/endpoint.settings';
import {CloudServiceElementModel} from './_models/cloudservice-element.model';
import {CloudServiceModel} from './_models/cloudservice.model';
import {Observable} from 'rxjs/Observable';
import {SearchResultModel} from './_models/searchresult.model';
import {getResponseURL} from '@angular/http/src/http_utils';

@Injectable()
export class  InsertCSService {

    csFields: CloudServiceElementModel[] = [];
    csDomain: string[] = [];
    public csField$: Observable<CloudServiceElementModel[]> = Observable.of([]);
    public domain$: Observable<string[]> = Observable.of([]);
    searchResults$: Observable<SearchResultModel[]> = Observable.of([]);
    private options: RequestOptions;

    private SINGLESELECTION     : string = 'http://ikm-group.ch/archiMEO/questionnaire#SingleSelection';
    private SEARCHSELECTION  : string = 'http://ikm-group.ch/archiMEO/questionnaire#SearchSelection';
    private VALUEINSERT         : string = 'http://ikm-group.ch/archiMEO/questionnaire#ValueInsert';
    private MULTISELECTION      : string = 'http://ikm-group.ch/archiMEO/questionnaire#MultiSelection'

    constructor(
        private http: Http,
        private jsonp: Jsonp) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
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
                        console.log(this.csDomain[0]);
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

    public search(ns: string, term: string) {

        console.log("search received: " + ns +" :: " + term);

        let search: URLSearchParams = new URLSearchParams()
        search.set('ns', ns);
        search.set('search', term);
        console.log('sending: ' + search.get('ns')  + ' - ' + search.get('search'));
        this.http.get(EndpointSettings.getSearchEndpoint(), { search: search })
            .map(response => response.json()).subscribe(

             data => {

                console.log("searchResults " +JSON.stringify(data));
                this.searchResults$ = Observable.of(data);


            }, error => console.log('Could not query services'));

    }


}
