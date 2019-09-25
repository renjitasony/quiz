import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  cpwd:string;
  constructor(private userService:UserService,
              private router:Router
    ) { }

  ngOnInit() {
    this.user = new User();
  }
  public onSubmit(){
    this.userService.addUser(this.user).subscribe(()=>{
      this.router.navigateByUrl("/");
    });
  }
}
