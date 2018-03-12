import { Component, OnInit } from '@angular/core';
import * as dashboard from '../../../ud/dashboard.json';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserInterface } from '../../core/ud/type-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userTab = 1;

  // tslint:disable-next-line:member-ordering
  expenseAdd = false;

  constructor(
    public auth: AuthService,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.router.navigateByUrl('/dashboard');
/* To get the values from collections
    this.auth.user.subscribe((userDetails) => {
      console.log(userDetails);
      this.userTab = userDetails.defTab;
    });
*/
  }

  showUserDefaults() {
    this.router.navigateByUrl('/usersettings');
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
