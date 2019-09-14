import { Component, OnInit, Input,Output } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import {Router} from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  @Input() public mode:string;
  @Output() cancelEdit = new EventEmitter();
  @Output() notifyAdd = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  question:Question;
  imageFile:File;
  needsUpload:boolean;
  hasImage:boolean;
  buttonField="Add";
  questionId:string;
  editMode = false;
  constructor(private qservice:QuestionService,
              private router:Router  
    ) { }

  ngOnInit() {
      this.question = new Question();
      this.needsUpload = false;
      if(this.mode != 'add'){
        this.editMode = true;
        var qid = this.mode.split("/",2);
        this.questionId = qid[1];
        this.qservice.getQuestion(this.questionId).subscribe((data)=>{
          this.buttonField="Update";
        var editQuestion;
        editQuestion = data;
        this.question.setQuestion(editQuestion);
        });      
      }
  }
  public toggleUpload(){
    this.needsUpload = !this.needsUpload;
    return;
  }
  public onFileChange(event){
    if(event.target.files.length >0){
       this.imageFile = event.target.files[0];      
    }
  }
  public trackByFunction(index,item){
    return index;
  }
  public onSubmit(qform){
    // jQuery('addModal').hide();
    var formData = new FormData();
    formData.append('qimage',this.imageFile);
    if(this.editMode){
      this.qservice.updateQuestion(this.question,this.questionId).subscribe(()=>{
        if(this.needsUpload){
          this.qservice.uploadImage(formData,this.questionId).subscribe();
        }
        this.cancelEdit.emit("updated/"+this.questionId);
        qform.reset();        
      })
    }else{
        this.qservice.addQuestion(this.question).subscribe((data)=>{
        var result;
        result = data;
        console.log(this.needsUpload);
        if(this.needsUpload)
        {
          console.log(result.qid);
          this.qservice.uploadImage(formData,result.qid).subscribe();
        }
        this.closeModal.emit("close");
        qform.reset();
        this.notifyAdd.emit("addition");     
      });
    }
    
  }
  public cancelEditing(){
    this.cancelEdit.emit("true");
  }
}
