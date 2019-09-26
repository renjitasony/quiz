import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uname:string;
  constructor(private router:Router,
              private userService:UserService,
              private authService:AuthService
    ) { }

  ngOnInit() {
    this.uname =  localStorage.getItem("uname");
  }
  public clearSessionData(){
    let userId = localStorage.getItem("userId");
    let totalScore = localStorage.getItem("totalScore");
    this.userService.storeUserData(userId,totalScore).subscribe(()=>{
      localStorage.clear();
      this.router.navigateByUrl("/");
    });
  }
}
