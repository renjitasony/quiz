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
  modalDisplay:string;
  
  constructor(private qservice:QuestionService) { }

  ngOnInit() {
    this.loadQuestionnaire("oninit");
  }    
  public openModal(){
    this.modalDisplay='block';
  }
  public closeAddModal(){
    this.closeModal.nativeElement.click();
  }
  public loadQuestionnaire(event){
    this.qservice.getQuestionnaire().subscribe((data)=>{
      this.questionnaire = data;
    });
  }
}
