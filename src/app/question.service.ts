import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) { }
  public getQuestionnaire(){
    let url ="https://maverick9008.herokuapp.com";
    return this.httpclient.get(url);
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
    let url ="https://maverick9008.herokuapp.com/question/"+qid;
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
}
