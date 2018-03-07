import { Injectable } from '@angular/core';
// import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Udefault } from './udefault';

@Injectable()
export class UdefaultService {

  private basePath = '/UD';

  udefaults: AngularFireList<Udefault[]> = null; // list of objects
  udefault: AngularFireObject<Udefault> = null; // single object

  constructor(private db: AngularFireDatabase) { }

  getUdefault(key: string): AngularFireObject<Udefault> {
    const udefaultPath =  `${this.basePath}/${key}`;
    this.udefault = this.db.object(udefaultPath);
    return this.udefault;
  }

  /* New User Defaults Creation
  createUdefault(udefault: Udefault): void  {
    this.udefaults.push(udefault)
      .catch(error => this.handleError(error));
  } */

  // Update existing User Defaults
 updateUdefault(key: string, value: any): void {
  this.udefaults.update(key, value)
    .catch(error => this.handleError(error));
}

private handleError(error) {
  console.log(error);
}

}
