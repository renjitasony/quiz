import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  category:string;
  routeTo:string;
  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe((params)=>{
      this.category = params.category;
    })
  }

  ngOnInit() {   
    if(this.category == "misc"){
      this.routeTo = "/question/misc";
    }else{
      this.routeTo = "/home/categories";
    } 
  }

}
