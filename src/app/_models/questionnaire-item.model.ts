import {AnswerModel} from './answer.model';

export class QuestionnaireItemModel {

  questionLabel:string;
  questionURI:string;
  questionID:number;
  answerList:AnswerModel[];
  answerDatatype:string;
  givenAnswerList:AnswerModel[];
  searchNamespace:string;
  comparisonOperationAnswers:AnswerModel[];
  comparisonAnswer:string;
  searchOnClassesInsteadOfInstances: boolean;
}
