import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  myClick(): void {
    console.log("logged in");
    this.username && this.password ? (()=>{sessionStorage.setItem("token", "qwerty"); this.router.navigate(['/', 'home'])})() : sessionStorage.setItem("token", null);
  }

}
