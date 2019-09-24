import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quizprogress',
  templateUrl: './quizprogress.component.html',
  styleUrls: ['./quizprogress.component.css']
})
export class QuizprogressComponent implements OnInit {
  @Input() public qnarray:Array<string>;
  
  constructor() { }

  ngOnInit() {
    console.log(this.qnarray);
  }

}
