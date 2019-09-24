import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {QuestionService} from '../question.service';
import { Question } from '../question';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  @ViewChild('closeModal',{static:false}) closeModal:ElementRef;
  questionnaire;
  categoryFilter="All";
  textFilter="";
  difficultyFilter = "";
  
  constructor(private qservice:QuestionService) { }

  ngOnInit() {
    this.loadQuestionnaire();
  }    
  public closeAddModal(){
    this.closeModal.nativeElement.click();
  }
  public loadQuestionnaire(){
    var filters = {
      category:this.categoryFilter,
      search:this.textFilter,
      difficulty:this.difficultyFilter
    }
    this.qservice.getQuestionnaire(filters).subscribe((data)=>{
      this.questionnaire = data;
    });
  }
}
