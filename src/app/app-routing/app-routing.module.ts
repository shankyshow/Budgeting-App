import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseSummaryComponent } from '../UI/expense-summary/expense-summary.component';
import { ExpenseAddComponent } from '../UI/expense-add/expense-add.component';
import { IncomeAddComponent } from '../UI/income-add/income-add.component';
import { DashboardSummaryComponent } from '../UI/dashboard-summary/dashboard-summary.component';

const appRoutes: Routes = [
  { path: '', component: DashboardSummaryComponent },
  { path: 'addincome', component: IncomeAddComponent },
  { path: 'addexpense', component: ExpenseAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
