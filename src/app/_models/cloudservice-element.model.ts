/**
 * Created by Stefano on 20/06/2017.
 */
import {AnswerModel} from './answer.model';

export class CloudServiceElementModel {
     propertyURI: string;
     propertyLabel: string;
     answerList: AnswerModel[];
     answerDatatype: string;
     givenAnswerList: AnswerModel[];
     searchNamespace: string;
     comparisonOperationAnswer: AnswerModel[];
     comparisonAnswer: string;
     typeOfAnswer: string;
     domain: string;
     annotationRelation: string;
     searchOnClassesInsteadOfInstances: boolean;
}
