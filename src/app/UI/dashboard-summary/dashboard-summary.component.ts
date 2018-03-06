import { Component, OnInit } from '@angular/core';
import * as dashboard from '../../../UD/dashboard.json';

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

  constructor() { }

  ngOnInit() {
  }

}
