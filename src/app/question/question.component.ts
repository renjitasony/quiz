import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  category:string;
  qindex = 0;
  score = 0;
  qtimer:number;
  timeInterval;
  question;
  questionSet;
  totalNo:number;
  imageUrl:string;
  qarray:any[];
  applyStatus = ["","",""];
  constructor(private route:ActivatedRoute,
              private qservice:QuestionService,
              private router:Router) {
                route.params.subscribe(params=>{                 
                  this.category = params.category;
                })
               }

  ngOnInit() { 
    if(this.category == "misc"){
      this.totalNo = 25;
    }else{
      this.totalNo = 10;
    }
    this.qservice.getQuiz(this.category,this.totalNo).subscribe((data)=>{
      this.questionSet = data;
      console.log(this.questionSet.length);
      this.question = this.questionSet.pop();
      this.loadImage();
      if(this.question != null){
        this.qindex = 1;
        this.qarray = this.getQarray(this.totalNo);
       this.startQuizTime();
      }
    })
  }
public nextQuestion(status){
  this.applyStatus = ["","",""];
  $('.qoptions').blur();
  if(status == 'right'){
    this.score += 10;    
  }
  this.qarray[(this.qindex-1)] = status;
  if(this.questionSet.length >0){
    this.question = this.questionSet.pop();
    this.loadImage();
    if(this.totalNo == 10){
      this.startQuizTime();
    }
    this.qindex++;
  }else{
    var totalScore = parseInt(localStorage.getItem("totalScore")); 
    totalScore += this.score;
    localStorage.setItem("totalScore",totalScore.toString());
    this.router.navigateByUrl("/home/score/"+this.score);
  }
}
public checkOption(op){
  if(op == this.question.answer){
    
  }
}
public onClick(op:number){
  for(var i=0;i<3;i++){
    if(this.applyStatus[op] != ""){
      return true;
    }
  }  
  if(op == this.question.answer){
    this.applyStatus[op] = 'rightoption';
    setTimeout(() => {
      this.nextQuestion('right');      
    }, 1000);
    
  }else{
    this.applyStatus[op] = 'wrongoption';
    setTimeout(() => {
      this.nextQuestion('wrong');      
    }, 1000);
  }
}
public loadImage(){
  var hasImage = (this.question.qimage && (this.question.qimage != ""));
  if(hasImage){
    this.imageUrl = "https://maverick9008.herokuapp.com/view/"+this.question.qimage;
  }else{
    this.imageUrl = "assets/img/category/quiz-for-teachers-1-728.jpg"
  }
}
public startQuizTime(){
  if(this.category == "misc"){
    this.qtimer = 89;
  }else{
    this.qtimer = 9;
  }  
  var myInterval;
  clearInterval(this.timeInterval);
  this.timeInterval = setInterval(()=>{
    if(this.qtimer >= 1){
      this.qtimer--;
    }else{
      this.qtimer--;
      clearInterval(this.timeInterval);
      this.nextQuestion("wrong");
    }    
  },1000);
}
  getQarray(n:number):any[]{
    return Array(n);
  }
}
