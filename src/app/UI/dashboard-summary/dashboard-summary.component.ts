import { Component, OnInit } from '@angular/core';
import * as dashboard from '../../../ud/dashboard.json';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {

  userOrderExpCheck(): number {
    return (<any>dashboard).expSumFirst;
  }
  userOrderIncCheck(): number {
    return (<any>dashboard).incSumFirst;
  }

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
