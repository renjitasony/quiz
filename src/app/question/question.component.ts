import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  demo:string;
  urlist;
  newList;
  mindex=0;
  constructor(private myroute:ActivatedRoute,
              private router:Router) {
                myroute.params.subscribe(params=>{                 
                  this.newList = params.idlist;
                  this.newList = this.newList.split(",");                   
                  this.mindex = this.newList.shift();
                  this.newList = this.newList.toString();                  
                })
               }

  ngOnInit() { 
    
  }
public nextQuestion(){
  if(this.newList != ""){
    this.router.navigate(['/question',this.newList],{skipLocationChange:true});
  }else{
    this.router.navigateByUrl("/");
  }
  
}
}
