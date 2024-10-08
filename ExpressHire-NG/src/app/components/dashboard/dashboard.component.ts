import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  name: any;
  email: any;

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');

    if (this.name == null || this.email == null) {
      this.router.navigate(['login']);
    }

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
