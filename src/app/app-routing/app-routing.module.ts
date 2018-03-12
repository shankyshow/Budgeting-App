import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseSummaryComponent } from '../ui/expense-summary/expense-summary.component';
import { ExpenseAddComponent } from '../ui/expense-add/expense-add.component';
import { IncomeAddComponent } from '../ui/income-add/income-add.component';
import { DashboardSummaryComponent } from '../ui/dashboard-summary/dashboard-summary.component';
import { LoginComponent } from '../ui/login/login.component';
import { SignupComponent } from '../ui/signup/signup.component';
import { AppComponent } from '../app.component';
import { UserSettingsComponent } from '../ui/user-settings/user-settings.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardSummaryComponent },
  { path: 'addincome', component: IncomeAddComponent },
  { path: 'addexpense', component: ExpenseAddComponent },
  { path: 'usersettings', component: UserSettingsComponent }
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
