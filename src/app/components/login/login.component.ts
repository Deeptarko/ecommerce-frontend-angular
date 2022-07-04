import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  error = '';
  constructor(private authenticationService: AuthenticationService,private router:Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.authenticationService
      .login(f.value.username, f.value.password)
      .pipe(first())
      .subscribe({
        next: () => {
         
          this.router.navigateByUrl('/home');
          console.log("Authentication Successfull");
        },
        error: (error) => {
          this.error = error;
          // this.loading = false;
          console.log(error);
        },
      });
  }
}
