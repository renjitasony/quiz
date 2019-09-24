import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) { }
  public getQuestionnaire(filters){
    let url ="https://maverick9008.herokuapp.com/questionnaire";
    return this.httpclient.post(url,filters);
  }
  public addQuestion(question){
    let url ="https://maverick9008.herokuapp.com/question/add";
    return this.httpclient.post(url,question);
  }
  public uploadImage(image,qid){
    let url ="https://maverick9008.herokuapp.com/question/upload/"+qid;
    return this.httpclient.post(url,image);
  }
  public getQuestion(qid){
    let url ="https://maverick9008.herokuapp.com/question/get/"+qid;
    return this.httpclient.get(url);
  }
  public updateQuestion(question,qid){
    let url ="https://maverick9008.herokuapp.com/question/update/"+qid;
    return this.httpclient.post(url,question);
  }
  public deleteQuestion(qid){
    let url ="https://maverick9008.herokuapp.com/question/delete/"+qid;
    return this.httpclient.get(url);
  }
  public getQuiz(category,limit){
    let url ="https://maverick9008.herokuapp.com/question/getquiz/"+category+"/"+limit;
    return this.httpclient.get(url);
  }
}
