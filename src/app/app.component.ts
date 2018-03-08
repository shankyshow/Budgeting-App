import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from './core/auth.service';
import { NotifyService } from './core/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shanky`s App for Budgeting & Personal Finance';

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(public auth: AuthService, public notify: NotifyService) {
  }

  logout() {
    this.auth.signOut();
  }

}
