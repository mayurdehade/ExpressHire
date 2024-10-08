import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private service: UserService, private router: Router) {}

  name: any;
  email: any;
  password: any;

  //register user
  userRegister() {
    console.log(this.name, this.email, this.password);
    if (this.name == null || this.email == null || this.password == null) {
      alert('Data invalid!');
      return;
    }
    this.service
      .createAccount(this.name, this.email, this.password)
      .subscribe((data) => {
        if (data) alert('Account created!');
        this.router.navigate(['login']);
      });
  }
}
