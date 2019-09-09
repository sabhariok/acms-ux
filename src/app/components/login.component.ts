import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: '../templates/login.component.html',
  styleUrls: [ ]
})
export class LoginComponent implements OnInit {
  private password: string;
  private userName: string;
  private errorMessage: string;
  constructor() { }
  ngOnInit() {
    this.userName = '';
    this.password = '';
    this.errorMessage = '';
  }
  onSubmit() {
    if ( this.userName === 'acms' && this.password === 'acms' ) {
      window.location.href = '/overview';
    } else {
      this.errorMessage = 'Invalid username/password';
    }
  }
}
