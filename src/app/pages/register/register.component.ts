import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;
  public password_cf: string;

  errors = null;
  errorsEmailPass = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  public onSubmit() {
    console.log(this.user);
    this.user.admin = 'true'
    this.authService.register(this.user).subscribe(
      (result: any) => {
        console.log(result);

      },
      error => {
        // tslint:disable-next-line:no-conditional-assignment
        this.errors = error.error.message;
        this.errorsEmailPass = error.error.errors;
        console.log(this.errors);
      }, () => {
        this.user = new User();
        this.router.navigate(['/auth/login']);
      }
    );
  }
}
