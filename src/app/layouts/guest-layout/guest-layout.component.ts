import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-layout',
  templateUrl: './guest-layout.component.html',
  styleUrls: ['./guest-layout.component.scss']
})
export class GuestLayoutComponent implements OnInit {

  test: Date = new Date();
  public isCollapsed = true;
  public isLogin = false;
  public user: User = this.authService.getUser();

  constructor(public authService:AuthService,private router: Router) { }

  ngOnInit() {

    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;

   });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }



}
