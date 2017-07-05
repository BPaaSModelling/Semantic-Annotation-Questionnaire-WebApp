export class EndpointSettings {

  //private static ENDPOINT       : string = 'http://wildfly10-lemming.rhcloud.com/BPaaS-Questionnaire-WebService-0.0.2-SNAPSHOT';


  private static ENDPOINT       : string = 'http://localhost:8080';
  //private static ENDPOINT       : string = 'https://bpaas-modelling.herokuapp.com:14673';



  private static QUESTIONNAIRE  : string = '/questionnaire';
  private static DISCOVER       : string = '/discover';
  private static DRILLDOWN      : string = '/drilldown';
  private static SEARCH         : string = '/search?';
  private static CSELEMENTS     : string = '/cselements';

  public static getQuestionnaireEndpoint() :string {
    return EndpointSettings.ENDPOINT + EndpointSettings.QUESTIONNAIRE;
  }

  public static getServiceDiscoveryEndpoint() :string {
    return EndpointSettings.ENDPOINT + EndpointSettings.DISCOVER;
  }

  public static getDrilldownEndpoint() :string {
    return EndpointSettings.ENDPOINT + EndpointSettings.DRILLDOWN;
  }

  public static getSearchEndpoint() :string {
    return EndpointSettings.ENDPOINT + EndpointSettings.SEARCH;
  }

  public static getCloudServiceElementsEndpoint() :string {
    return EndpointSettings.ENDPOINT + EndpointSettings.CSELEMENTS;
  }


}
