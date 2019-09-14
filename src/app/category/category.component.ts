import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() public category;
  mylist=[23,45,67];
  passit:string;
  isAdmin = true;
  goto="";

  constructor() { }

  ngOnInit() {
    if(this.isAdmin){
      this.goto ="/questionnaire/science";
      this.passit="science";
    }else{
      
      var news=this.mylist.toString();
      this.passit = this.mylist.toString();
      this.goto = "/question/"+this.passit;
      var chang = news.split(",");
      console.log(chang);
    }   
  }

}
