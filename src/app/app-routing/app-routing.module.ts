import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseSummaryComponent } from '../UI/expense-summary/expense-summary.component';
import { ExpenseAddComponent } from '../UI/expense-add/expense-add.component';

const appRoutes: Routes = [
  { path: '', component: ExpenseSummaryComponent },
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
