import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { UserDefaultsInterface, UserInterface } from '../../core/ud/type-interface';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userDefaultsForm: FormGroup;

  defTab: number;
  currency: string;
  dasboardSummaryOrder = 'expInc';

  incExp() {
    this.dasboardSummaryOrder = 'incExp';
  }

  expInc() {
    this.dasboardSummaryOrder = 'expInc';
  }

  constructor(
    fb: FormBuilder,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  userDefaultsOk(data) {
    const userDefaults: UserDefaultsInterface = {
      defTab: this.defTab,
      currency: this.currency,
      dashboardSummaryOrder: this.dasboardSummaryOrder
    };
    const userDetails: UserInterface = {
      uid: this.afAuth.auth.currentUser.uid,
      email: this.afAuth.auth.currentUser.email
    };
    this.auth.updateUser(userDetails, userDefaults);
  }

}
