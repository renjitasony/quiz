import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-editablequestion',
  templateUrl: './editablequestion.component.html',
  styleUrls: ['./editablequestion.component.css']
})
export class EditablequestionComponent implements OnInit {
  @Input() public editQuestion;
  @Input() public index;
  @Output() notifyDeletion = new EventEmitter();
  editMode:boolean;
  hasImage:boolean;
  constructor(private qservice:QuestionService) {     
  }

  ngOnInit() {
    this.editMode = false;
    this.hasImage = (this.editQuestion.qimage && (this.editQuestion.qimage != ""));
  }
  public switchMode(mode){
    this.editMode = mode;
  }
  public cancelEdit(mode){        
    if(mode == "true"){
      this.switchMode(false);
    }else{
      var qid = mode.split("/",2);
      this.qservice.getQuestion(qid[1]).subscribe((data)=>{
        var result;
        result = data;
        this.editQuestion = result;
        this.switchMode(false);
      });
    }
  }
  public deleteQuestion(qid){
    this.qservice.deleteQuestion(qid).subscribe(()=>{
      this.notifyDeletion.emit("deleted");
    });
  }
}
