/**
 * Created by Stefano on 20/06/2017.
 */
import {AnswerModel} from './answer.model';

export class CloudServicePropertyModel {
    propertyURI: string;
    propertyLabel: string;
    answerList: AnswerModel[];
    answerDatatype: string;
    givenAnswerList: string[];
    searchNamespace: string;
    comparisonOperationAnswers: AnswerModel[];
    comparisonAnswer: string;
}
