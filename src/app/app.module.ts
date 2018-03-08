import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './ui/login/login.component';
import { SignupComponent } from './ui/signup/signup.component';
import { IncomeSummaryComponent } from './ui/income-summary/income-summary.component';
import { ExpenseSummaryComponent } from './ui/expense-summary/expense-summary.component';
import { ExpenseAddComponent } from './ui/expense-add/expense-add.component';
import { IncomeAddComponent } from './ui/income-add/income-add.component';
import { DashboardSummaryComponent } from './ui/dashboard-summary/dashboard-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    IncomeSummaryComponent,
    ExpenseSummaryComponent,
    ExpenseAddComponent,
    IncomeAddComponent,
    DashboardSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
