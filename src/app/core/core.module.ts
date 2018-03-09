import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NotifyService } from './notify.service';
import { ExpenseService } from './ud/expense.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [AuthService, NotifyService, ExpenseService]
})
export class CoreModule { }
