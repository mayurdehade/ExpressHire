import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  fullName: any;
  email: any;
  key: any;

  validKey:String = '1234567890';

  keyValidation() {
    if (this.key != this.validKey) {
      document.getElementById('invalid-key')?.classList.remove('hidden');
    } 
    else {
      document.getElementById('invalid-key')?.classList.add('hidden');
    }
  }

  candidateLogin() {
    console.log(this.fullName, this.email, this.key)
  }
}
