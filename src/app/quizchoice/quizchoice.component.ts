import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizchoice',
  templateUrl: './quizchoice.component.html',
  styleUrls: ['./quizchoice.component.css']
})
export class QuizchoiceComponent implements OnInit {
  isAdmin=false;
  constructor() { }

  ngOnInit() {
    this.isAdmin = (localStorage.getItem("isAdmin") == "admin");
  }

}
