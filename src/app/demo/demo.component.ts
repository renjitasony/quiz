import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  mycategory=["Science","Politics","General Knowledge","Arts & Culture","Sports","World"];

  constructor() { }

  ngOnInit() {
  }

}
