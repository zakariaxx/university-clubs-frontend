import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  public user:User;
  errors = null;
  errorsEmailPass = null;

  ngOnInit(): void {
    this.user = new User();
  }
  onSubmit() {
    this.authService.signin(this.user).subscribe(
      (result:any )=> {
        console.log(result);

          this.user = result.user;

        this.authService.responseHandler(result)
      },
      error => {
        // tslint:disable-next-line:no-conditional-assignment
        this.errors = error.error.message;
        this.errorsEmailPass = error.error.errors;
        console.log(this.errors);
      }, () => {
        this.user = this.authService.getUser();
        if(this.user.admin == 'true'){
          this.router.navigate(['/admin/dashboard']);
        }else{
          this.router.navigate(['/home']);
        }
      }
    );
  }

}
