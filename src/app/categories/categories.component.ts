import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories=["Science","Politics","General Knowledge","Arts & Culture","Sports","World"]
  constructor() { }

  ngOnInit() {
  }

}
