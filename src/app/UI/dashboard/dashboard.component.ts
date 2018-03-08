import { Component, OnInit } from '@angular/core';
import * as dashboard from '../../../ud/dashboard.json';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userTab(): number {
    return (<any>dashboard).defTab;
  }

  // tslint:disable-next-line:member-ordering
  expenseAdd = false;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/dashboard');
  }

/* MAIN BALANCE Summary */
  getYearBal(): number {
    return (<any>dashboard).yearBal;
  }

  getMonthBal(): number {
    return (<any>dashboard).monthBal;
  }

  getWeekBal(): number {
    return (<any>dashboard).weekBal;
  }

  getBiWeekBal(): number {
    return (<any>dashboard).biweekBal;
  }

  getDayBal(): number {
    return (<any>dashboard).dayBal;
  }

  logout() {
    this.auth.signOut();
  }

}
