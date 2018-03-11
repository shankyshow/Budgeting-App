import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseSummaryComponent } from '../ui/expense-summary/expense-summary.component';
import { ExpenseAddComponent } from '../ui/expense-add/expense-add.component';
import { IncomeAddComponent } from '../ui/income-add/income-add.component';
import { DashboardComponent } from '../ui/dashboard/dashboard.component';
import { LoginComponent } from '../ui/login/login.component';
import { SignupComponent } from '../ui/signup/signup.component';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
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
