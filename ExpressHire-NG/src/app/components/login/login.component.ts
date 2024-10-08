import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: UserService, private router: Router) {}

  password: any;
  email: any;

  InterviewerLogin() {
    if (this.email == null || this.password == null) {
      alert('Invalid data');
      this.router.navigate(['login']);
    }

    this.service.login(this.email, this.password).subscribe((data) => {
      if (data.message == 'ok') {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        alert("login successful")
        this.router.navigate(['/dashboard']);
      } else {
        alert(data.message);
      }
    });
  }
}
