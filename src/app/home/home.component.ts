import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routeTo:string;
  constructor() { }

  ngOnInit() {
    var urole = localStorage.getItem("isAdmin");
    if(urole == 'admin'){
      this.routeTo = '/home/questionnaire';
    }else{
      this.routeTo = '/home/choice';
    }
  }

}
