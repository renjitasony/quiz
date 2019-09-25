import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  username:string;
  password:string;
  constructor(private userService:UserService,
              private router:Router,
              private authService:AuthService
    ) { }

  ngOnInit() {
  }
  public onSubmit(){
    this.user = new User();
    this.user.username = this.username;
    this.user.password = this.password;
    this.userService.authenticate(this.user).subscribe((data)=>{
      if(data == null){
        this.router.navigateByUrl("/");
      }else{
        this.user = data;
        localStorage.setItem("userId",this.user._id);
        localStorage.setItem("isAdmin",this.user.role);
        localStorage.setItem("uname",this.user.name);
        localStorage.setItem("totalScore",this.user.totalscore);
        this.router.navigateByUrl("/home");
      }
    })
  }
}
