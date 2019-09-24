import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score:number;
  totalScore:number;
  constructor(route:ActivatedRoute) {
    route.params.subscribe((params)=>{
      this.score = params.score;
    });
    this.totalScore = parseInt(localStorage.getItem("totalScore"));
   }

  ngOnInit() {
  }

}
