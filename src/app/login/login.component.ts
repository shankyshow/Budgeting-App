import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Shanky`s App for Budgeting & Personal Finance';
  user: User;

  constructor(public AfService: AfService) { }

  ngOnInit() {
    this.AfService.user$.subscribe(user => this.user = user);
  }
  login() {
    this.AfService.loginWithGoogle();
  }

}
