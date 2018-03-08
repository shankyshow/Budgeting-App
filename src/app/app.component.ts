import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from './core/auth.service';
import { NotifyService } from './core/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shanky`s App for Budgeting & Personal Finance';

  constructor(public auth: AuthService, public notify: NotifyService, public router: Router) {
    router.navigateByUrl('/login');
  }

  logout() {
    this.auth.signOut();
  }

}
