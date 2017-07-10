import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import {EndpointSettings} from '../_settings/endpoint.settings';
import {SearchResultModel} from '../_models/searchresult.model';
import {CloudServiceModel} from '../_models/cloudservice.model';
import {ServiceModel} from '../_models/service.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CloudServiceElementModel} from '../_models/cloudservice-element.model';
import {InsertCSService} from '../admin-insert-cloudservice.service';

@Component({
  selector: 'app-admin-insert-cloud-service',
  templateUrl: './admin-insert-cloud-service.component.html',
  styleUrls: ['./admin-insert-cloud-service.component.css']
})

export class AdminInsertCloudServiceComponent implements OnInit {

  public cloudService: CloudServiceModel= new CloudServiceModel();
  private csLabel: string = "";
  private status: string;
  private specific_domain = "General";
constructor(
   private insertService: InsertCSService
){
  this.insertService.queryCSModel();
  //insertService.defineDomains(insertService.cloudService);
}
  ngOnInit() {

  }



  public createCS(): void{
     status = this.insertService.createCloudService(this.csLabel);
     if (status = "OK"){
       alert("CloudService added successfully!")
       location.reload();
     }
}
}
